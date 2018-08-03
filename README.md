# Bamazon

This was a school assignment to create an Amazon-like storefront with MySQL. The app takes in orders from customers and depletes stock from the store's inventory.

## Here is how it works:

1. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

2. The app then prompts users with two messages:

    * The first asks them the ID of the product they would like to buy.
    * The second message asks how many units of the product they would like to buy. 

3. Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.  

4. If not, the app prevents the order from going through.

5. However, if the store _does_ have enough of the product, the customer's order is fulfilled.
   * The SQL database is updated to reflect the remaining quantity.
   * Once the update goes through, the customer is shown the total cost of their purchase.

6. The customer is then asked if they would like to shop again, which prompts the app to run again, or quit.

## Here is a video of the app in action: 

[![YouTube Video](http://img.youtube.com/vi/qevBmGEqe2A/0.jpg)](http://www.youtube.com/watch?v=qevBmGEqe2A)

## Here is a screenshot of the output: 

![Output Image](/images/Screen Shot 2018-08-02 at 10.40.20 PM.png)
Format: ![Alt Text](url)







