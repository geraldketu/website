import React from 'react'
import './App.css';

 function Projects() {
  return (
    <div className ="Projects">
      <h1>Projects worked on</h1>
      <a href="https://github.com/geraldketu/Bradley-Beverage-Shop"><h2> Bradely Beverage Shop</h2></a>  
      <p3>{"The BevShop offers three categories of beverages: coffee, alcoholic, and smoothie. Customers can order their beverages in three sizes: small, medium, and large. Each beverage type has a base price, with additional charges based on size and custom add-ons. The BevShop has the ability to create and process orders, provide information on all orders, calculate the total amount of a specific order, and generate a monthly report on the number of orders and sales."}</p3>
      <a href="https://github.com/geraldketu/Holiday-Bonus"><h2> Holiday Bonus</h2></a>  
      <p3>{"Minnie and Mickey are preparing to distribute holiday bonuses to employees in Retail District #5 based on the sales performance of each retail store in different categories. The highest-selling store in a category will receive $5,000, the lowest-selling store will receive $1,000, and all others will receive $2,000. Stores with no sales or negative sales in a category will not be eligible for a bonus. If only one store sold in a category, they will receive a $5,000 bonus. To create the Sales Report, two utility classes will be developed. The first class will manipulate a two-dimensional ragged array of sales data and accommodate both positive and negative numbers. The second class will calculate the holiday bonuses using the sales data and bonus amounts for each tier. These classes will be used in conjunction with an existing GUI class to display the sales report and holiday bonuses. Testing will be done using JUnit tests and the provided GUI class."}</p3>
      <a href="https://github.com/geraldketu/Librarian-"><h2>Librarian</h2></a>
      <p3>{"This C++ program is designed to manage and organize the book collection in a library. It is responsible for checking in and counting the books, keeping records of the books, and organizing the collection. The program uses various data structures and algorithms to efficiently store and retrieve information about each book, such as the title, author, ISBN, and the number of copies in the library"}</p3>
   

      <a href="https://montgomerycollege0-my.sharepoint.com/:w:/g/personal/gndawula_montgomerycollege_edu/EUmcQZx-hQZCjjGCux4UCbABAbj4CtQ8D9MVnnyUfRzVGA?e=qPhO6a"><h3>Resume</h3></a>
    </div>
    
  )
}


export default Projects;
