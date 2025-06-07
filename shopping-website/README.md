# Shopping Website

This is a Spring Boot application for a shopping website that allows users to search for items, view item details, and manage their shopping experience.

## Features

- Home page with a search bar
- Display of items in card format with prices and descriptions
- Selectable address that can be changed in the search bar
- Detailed view of items when clicked

## Project Structure

```
shopping-website
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── shoppingwebsite
│   │   │               ├── ShoppingWebsiteApplication.java
│   │   │               ├── controller
│   │   │               │   ├── HomeController.java
│   │   │               │   └── ItemController.java
│   │   │               ├── model
│   │   │               │   └── Item.java
│   │   │               ├── repository
│   │   │               │   └── ItemRepository.java
│   │   │               └── service
│   │   │                   └── ItemService.java
│   │   └── resources
│   │       ├── static
│   │       │   ├── css
│   │       │   │   └── styles.css
│   │       │   └── js
│   │       │       └── scripts.js
│   │       ├── templates
│   │       │   ├── home.html
│   │       │   └── item-details.html
│   │       └── application.properties
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── shoppingwebsite
│                       └── ShoppingWebsiteApplicationTests.java
├── pom.xml
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd shopping-website
   ```

3. Build the project using Maven:
   ```
   mvn clean install
   ```

4. Run the application:
   ```
   mvn spring-boot:run
   ```

5. Open your web browser and go to `http://localhost:8080` to access the shopping website.

## Usage Guidelines

- Use the search bar on the home page to find items.
- Click on an item card to view more details about the item.
- Change the address in the search bar to filter items based on location.

## Technologies Used

- Spring Boot
- Thymeleaf
- Java
- Maven
- HTML/CSS/JavaScript

## License

This project is licensed under the MIT License.