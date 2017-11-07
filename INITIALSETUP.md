#STEP 1 
you need to set up an initial DB with postgres 

from the DB you need to be able to stand up the DB with the following models 

1.Category
2.Condition
3.Item
4.ItemStatus
5.User 


#Category DB should have the following the Table (populate with type of categories electronics, cloths etc)
id | Type
   | 
  
#Conditions

id | condition 
   |   -new
   |   -likenew
   |   -used
   |   -stayBroke

#Item

id  | Price | Name | Description | Category| Owner/User| Condition| is_sold

#ItemStatus

id |  is_sold
   |  Booleon


#Users

id  | name | password



#STEP 2 

after the db is initially set up you can seed the tables with mock data via sequelize or fill the tables as you see fit 


#STEP 3




