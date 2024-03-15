## This is an optional assignment. Mandatory prerequisite is [Assignment01](https://github.com/shailbala/DSVV-MCA25-TestProject/tree/main/Assignment_01).

## Instructions

#### Learn the _pandas_ library
(Suggested learning: https://www.kaggle.com/learn/pandas)

#### All these to be done in a Jupyter Notebook.

#### Parse the un-processed csv file using pandas and do the following:
* Read the csv into a pandas dataframe setting the first column as Index column.
* Show the first five and last ten rows in the dataframe.
* What are the columns present?
* For each column, get the total number of rows which contain data (Can you do it in two words?)
* We don't want to keep the 'non-book' entries. (Which columns can you use to filter this out?)
* Drop all the non-book products. Create a separate dataframe for the non-book products. Drop all the columns which don't apply to non-books. Reset the index. Save it as csv.
* Show the first five and last ten entries now present. Reset the index.
* Are there any rows which have no author? Did you remove all the non-book products?
* What is the total count of books in the AWGP Store?
* Get all the unique author names. There are names for the same author. Can you update it to have a single format for each author?
* Some author names contain extra symbols which is not desirable. Can you update that?
* **Optional**: Explore the column named 'Extra'. Are any of these values useful? Can we extract some information from these values?
* Save the dataframe to file named "allAwgpBooks.csv".
* Split the dataframe based on the languages. For each language, save a different file with the format AwgpBooks[Lang].csv. Example: AwgpBooksEn.csv, AwgpBooksHi.csv

#### Submission Instructions:
To upload the optional assignment, upload a Jupyter Notebook with both code and output. Add all the 8 csvs saved after processing the data.

#### Last Date: 17/03/2024
