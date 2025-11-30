The repository pattern is an abstraction used to hide the multiple data sources we may have in our application, data in an application may come from an internal database, or, an external service such as a Web API.

This pattern is adopted and widely used when developing Android applications, it’s also the recommended approach to creating an application.

The following diagram displays a generic mobile application architecture on Android.

![Mobile Application Architecture](../images/blog/android-repository-pattern.webp)

What we can take from this diagram is the following:

Our Activity/Fragment may or may not have one, or multiple instances of different ViewModels, each view model has a dependency to a specific repository, this repository can be shared by multiple view models.

The repository knows the data sources from where to retrieve information, in this case, the repository knows the Model, which is Room, a layer on top of SQLite, and a service interface, which is provided by Retrofit in order to communicate to a web service.

Each layer only knows the layer below. The ViewModel doesn’t know who the repository interacts with.

Let’s give a concrete implementation example.

We will start with a sample activity, an EditText to write a reminder and a button to add the reminder.

**CreateReminderActivity**
```kotlin
class CreateReminderActivity : AppCompatActivity() {
    val viewModel: CreateReminderViewModel by lazy {
        val app = application as ReminderApp
        val viewModelProviderFactory =
            CreateReminderViewModelProviderFactory(
                app,
                intent
            )
        ViewModelProvider(
            this,
            viewModelProviderFactory
        )[CreateReminderViewModel::class.java]
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.createreminderactivity)
        val reminderEditText: EditText = findViewById(R.id.reminderEditTextView)
        val createReminderButton: Button = findViewById(R.id.createReminderButton)
        createReminderButton.setOnClickListener {
            createReminder(
                text = reminderEditText.text.toString()
            )
        }
    }
    private fun createReminder(text: String) {
        if (text.isEmpty()) {
            showToast(message = "Reminder text field is empty")
        } else {
            viewModel.createReminder(text = text)
        }
    }
    private fun showToast(message: String) {
        ...
    }
}
```

**ReminderApp**

```kotlin 
class ReminderApp : Application() {
    companion object {
        lateinit var retrofit: Retrofit
        lateinit var reminderDb: ReminderDb
    }
    override fun onCreate() {
        super.onCreate()
        reminderDb = Room
            .databaseBuilder(
                applicationContext,
                ReminderDb::class.java,
                "Reminder-Db"
            )
            .build()
        retrofit = Retrofit.Builder()
            .baseUrl(REMINDERS_API_HOST)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
}
```

**ViewModelFactory**
```kotlin
class CreateReminderViewModelProviderFactory(val app: ReminderApp, val intent: Intent) :
    ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        val reminderDao = ReminderApp.reminderDb.reminderDao()
        val reminderService = ReminderApp.retrofit.create(ReminderService::class.java)
        val reminderRepository = ReminderRepository(
            reminderDao = reminderDao,
            reminderService = reminderService
        )
        val viewModel = CreateReminderViewModel(reminderRepository)
        return viewModel as T
    }
}
```

**ViewModel**
```kotlin
class CreateReminderViewModel(private val reminderRepository: ReminderRepository) : ViewModel() {
    fun createReminder(text: String) =
        viewModelScope.launch {
            reminderRepository.createReminder(text = text)
        }
}
```
`createReminder` uses `viewModelScope` in order to launch a coroutine.

> Any coroutine launched in this scope is automatically cancelled if the `ViewModel` is cleared. Coroutines are useful here for when you have work that needs to be done only if the `ViewModel` is active. For example, if you are computing some data for a layout, you should scope the work to them `ViewModel` so that if the `ViewModel` is cleared, the work is cancelled automatically to avoid consuming resources.

**Repository**
```kotlin
class ReminderRepository(
    private val reminderService: ReminderService,
    private val reminderDao: ReminderDao
) {
    suspend fun getReminders(): LiveData<List<Programme>> = liveData {
        emitSource(reminderDao.getReminders())
        val reminders = reminderService.getReminders().toReminders()
        reminderDao.createReminder(*reminders.toTypedArray())
    }
...
suspend fun createReminders(text: String): Reminder {
        val reminderToBeCreated = ReminderInputModelDto(text = text)
        val reminder = reminderService.createReminder(reminderToBeCreated).toReminder()
        reminderDao.createReminder(reminder)
        return reminder
    }
```

**ReminderDao(Room)**
```kotlin
@Dao
interface ReminderDao {
    @Query("SELECT * FROM REMINDER")
    fun getAllReminders(): LiveData<List<Reminder>>
    @Insert(onConflict = OnConflictStrategy.IGNORE)
    suspend fun createReminder(vararg reminders: Reminder)
}
```

**ReminderService(Retrofit)**
```kotlin
interface ReminderService {
    @GET("reminders")
    suspend fun getReminders(): RemindersOutputModelDto
    @POST("reminders")
    suspend fun createReminder(@Body reminder: ReminderInputModelDto): ReminderOutputModelDto
}
```

This article tries to give a possible implementation of the recommended approach when designing an Android application.

Original Post: [Android Repository Pattern Using Room, Retrofit and Coroutines](https://dev.to/rodrassilva/android-repository-pattern-using-room-retrofit-and-coroutines-58kb)