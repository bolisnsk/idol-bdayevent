import csv
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from near_and_dear.models import Post

CSV_PATH = './birthday_event.csv'

with open(CSV_PATH, encoding='utf-8-sig') as csvfile:
    data_reader = csv.reader(csvfile)
    next(data_reader, None)
    for row in data_reader:
        Post.objects.create(
            title=row[0],
            address=row[1],
            content=row[2],
            url=row[3],
            image=row[4],
            create_dt=row[5],
            update_dt=row[6],
            start_day=row[7],
            end_day=row[8],
            open_time=row[9],
            close_time=row[10],
            category_id=int(row[11])
        )
        print(row)
