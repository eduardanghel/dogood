# Generated by Django 3.0.3 on 2020-02-26 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('karmaapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(choices=[('m', 'Male'), ('f', 'Female'), ('x', 'Non-binary')], max_length=1, null=True),
        ),
    ]