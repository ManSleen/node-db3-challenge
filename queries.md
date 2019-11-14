# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

**SELECT P.ProductName, C.CategoryName FROM [Products] as P JOIN [Categories] as C ON C.CategoryID = P.CategoryId**

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

**SELECT O.OrderID, O.OrderDate, S.ShipperName FROM [Orders] as O JOIN [Shippers] as S ON S.ShipperID = O.ShipperID WHERE OrderDate < "1997-01-09"**

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

**SELECT P.ProductName, OD.Quantity FROM [OrderDetails] as OD JOIN [Products] as P ON P.ProductID = OD.ProductID WHERE OD.OrderID = "10251" ORDER BY P.ProductName**

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

**SELECT O.OrderID, C.CustomerName as Customer, E.LastName as OrderedBy FROM [Orders] as O JOIN [Customers] as C ON C.CustomerID = O.CustomerID JOIN [Employees] as E ON E.EmployeeID = O.EmployeeID**

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

**SELECT C.CategoryName, COUNT(P.ProductID) as numberOfProducts FROM [Categories] as C JOIN [Products] as P ON P.CategoryID = C.CategoryID GROUP BY C.CategoryName**

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

**SELECT O.OrderID, COUNT(OD.Quantity) as ItemCount FROM [Orders] as O JOIN [OrderDetails] as OD ON OD.OrderID = O.OrderID GROUP BY O.OrderID**
