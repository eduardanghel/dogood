# Generated by Django 3.0.3 on 2020-04-20 04:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('karmaapp', '0001_initial_migration'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='activity',
            options={'verbose_name': 'Karma: Activities'},
        ),
        migrations.AlterModelOptions(
            name='cause',
            options={'verbose_name': 'Karma: Causes'},
        ),
        migrations.AlterModelOptions(
            name='charityprofile',
            options={'verbose_name': 'Karma: Charities'},
        ),
        migrations.AlterModelOptions(
            name='userprofile',
            options={'verbose_name': 'Karma: User Profiles'},
        ),
    ]