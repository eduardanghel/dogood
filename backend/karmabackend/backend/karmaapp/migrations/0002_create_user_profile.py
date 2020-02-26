# Generated by Django 3.0.3 on 2020-02-25 20:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('karmaapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('birth_date', models.DateField(null=True)),
                ('genre', models.CharField(choices=[('m', 'Male'), ('f', 'Female')], max_length=1, null=True)),
                ('address', models.CharField(max_length=150, null=True)),
                ('postcode', models.CharField(max_length=8, null=True)),
                ('city', models.CharField(max_length=50, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
    ]
