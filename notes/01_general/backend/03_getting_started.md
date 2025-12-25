### Spring Boot Project setup
![SpringBootProject.png](SpringBootProject.png)

### git repo:
https://github.com/online1000/TodoApp


### steps
#### phase1:
* basic settings in **application.properties**
  * database settings H2 database (e.g. datasource, login data)
  * JPA/Hibernate configuration (e.g. update schema if necessary)
  * logging configuration (e.g. loglevels, logfile, ...)


* create entity
  ```Java
    private Long id;
    private String title;
  ```
  
* create **TaskRepository implements JpaRepository<Entity, IdType> repository**

* create RestController  
   implemented methods:  
     * findAllTasks
     * addTask
     * deleteTask