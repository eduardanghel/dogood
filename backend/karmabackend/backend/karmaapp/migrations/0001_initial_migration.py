# Generated by Django 3.0.3 on 2020-04-19 14:36

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('is_charity', models.BooleanField(blank=True, default=False, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Cause',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
                ('logo', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dob', models.DateField(blank=True, null=True)),
                ('gender', models.CharField(blank=True, choices=[('0', 'Male'), ('1', 'Female'), ('2', 'Non-binary')], max_length=1, null=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=50, null=True)),
                ('postcode', models.CharField(blank=True, max_length=8, null=True)),
                ('telephone', models.CharField(blank=True, max_length=12, null=True)),
                ('terms_consent', models.BooleanField(blank=True, default=False, null=True)),
                ('terms_consent_datetime', models.DateTimeField(blank=True, default=None, null=True)),
                ('token', models.CharField(blank=True, default='', max_length=200, null=True)),
                ('is_activated', models.BooleanField(blank=True, default=True, null=True)),
                ('activation_token', models.CharField(blank=True, default='', max_length=100, null=True)),
                ('activation_token_valid_until', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('password_reset_token', models.CharField(blank=True, default='', max_length=100, null=True)),
                ('password_reset_token_valid_until', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('causes', models.ManyToManyField(to='karmaapp.Cause')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CharityProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_registration', models.DateField(blank=True, null=True)),
                ('type', models.CharField(blank=True, choices=[('1', 'Non-government organisation'), ('2', 'Other type'), ('3', 'Other type 2')], max_length=1, null=True)),
                ('charity_number', models.IntegerField(blank=True, null=True)),
                ('exemption', models.CharField(blank=True, choices=[('1', 'Non-government organisation'), ('2', 'Other type'), ('3', 'Other type 2')], max_length=1, null=True)),
                ('logo', models.URLField(blank=True, null=True)),
                ('terms_consent', models.BooleanField(blank=True, default=False, null=True)),
                ('terms_consent_datetime', models.DateTimeField(blank=True, default=None, null=True)),
                ('token', models.CharField(blank=True, default='', max_length=200, null=True)),
                ('is_activated', models.BooleanField(blank=True, default=True, null=True)),
                ('activation_token', models.CharField(blank=True, default='', max_length=100, null=True)),
                ('activation_token_valid_until', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('password_reset_token', models.CharField(blank=True, default='', max_length=100, null=True)),
                ('password_reset_token_valid_until', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('causes', models.ManyToManyField(to='karmaapp.Cause')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='charity_profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('date', models.DateField(blank=True, null=True)),
                ('time', models.TimeField(blank=True, null=True)),
                ('number_spots', models.PositiveIntegerField(blank=True, null=True)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('activity_description', models.TextField(blank=True, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('telephone', models.CharField(blank=True, max_length=12, null=True)),
                ('photo', models.URLField(blank=True, null=True)),
                ('age_check', models.BooleanField(blank=True, default=True, null=True)),
                ('photo_check', models.BooleanField(blank=True, default=False, null=True)),
                ('physical_activity_check', models.BooleanField(blank=True, default=False, null=True)),
                ('additional_info_check', models.BooleanField(blank=True, default=False, null=True)),
                ('causes_type', models.ManyToManyField(to='karmaapp.Cause')),
                ('charity', models.ManyToManyField(to='karmaapp.CharityProfile')),
            ],
        ),
    ]