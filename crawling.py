import snscrape.modules.twitter as sntwitter
import pandas as pd

tweets_list2 = []

for i, tweet in enumerate(
        sntwitter.TwitterSearchScraper('아이브 생일 카페 since:2023-01-01 until:2023-12-31').get_items()):
    if i > 1000:
        break
    tweets_list2.append([tweet.url, tweet.date, tweet.id, tweet.content, tweet.username])

tweets_df2 = pd.DataFrame(tweets_list2, columns=['URL', 'Datetime', 'Tweet Id', 'Content', 'Username'])
tweets_df2.to_csv('collect_event.csv', encoding='utf-8-sig')
print(tweets_df2)