from pyspark.sql import SparkSession
import sys

def movie_rating_analysis(data_source, output_uri):
    with SparkSession.builder.appName("Analyse rating").getOrCreate() as spark:

        # Load the movie rating csv data
        if data_source is not None:
            movie_rating_df = spark.read.option("header", "true").csv(data_source)

        # Create an in-memory DataFrame to query
        movie_rating_df.createOrReplaceTempView("movie_dataset")

        # Get Disaster, Flop, Average, Hit, Super Hit, Blockbuster movies based on rating division
        analysis = spark.sql(
            """select t.range as Analysis, count(*) as Count
            from (
            select  CASE  
            WHEN rating = 0 then 'Disaster'
            WHEN rating between 0.1 and 1.5 then 'Flop'
            WHEN rating between 1.6 and 2.5 then 'Average'
            WHEN rating between 2.6 and 3.5 then 'Hit'
            WHEN rating between 3.6 and 4.5 then 'Super Hit'
            else 'Blockbuster' end as range
            from movie_dataset) t
            group by t.range""")

        analysis.write.option("header","true").mode("overwrite").csv(output_uri)

        # Stop the underlying SparkContext
        spark.stop

def movie_rating_analysis_based_on_director(data_source, output_uri):
    with SparkSession.builder.appName("Analyse rating").getOrCreate() as spark:

        # Load the movie csv data
        if data_source is not None:
            movie_rating_df = spark.read.option("header", "true").csv(data_source)

        # Creates or replaces a local temporary view with this DataFrame
        movie_rating_df.createOrReplaceTempView("movie_dataset")

        # Get Maximum, Minimum, Average rating of each director
        analysis = spark.sql(
            """SELECT directedBy, MAX(rating) as Max_Rating, MIN(rating) as Min_Rating, AVG(rating) AS Avg_Rating 
            FROM movie_dataset 
            GROUP BY directedBy""")

        analysis.write.option("header","true").mode("overwrite").csv(output_uri)

        #Stop the underlying SparkContext
        spark.stop

def movie_count_of_each_director(data_source, output_uri):
    with SparkSession.builder.appName("Analyse rating").getOrCreate() as spark:

        # Load the movie csv data
        if data_source is not None:
            movie_rating_df = spark.read.option("header", "true").csv(data_source)

        # Creates or replaces a local temporary view with this DataFrame
        movie_rating_df.createOrReplaceTempView("movie_dataset")

        # Total movies released by each director
        analysis = spark.sql(
            """SELECT year, Count(*) AS Total_Movies_Released 
            FROM movie_dataset 
            GROUP BY year
            ORDER BY year""")

        analysis.write.option("header","true").mode("overwrite").csv(output_uri)

        # Stop the underlying SparkContext
        spark.stop

if __name__ == "__main__":
    #movie_rating_analysis(sys.argv[1],sys.argv[2])
    #movie_rating_analysis_based_on_director(sys.argv[1], sys.argv[3])
    movie_count_of_each_director(sys.argv[1], sys.argv[4])

