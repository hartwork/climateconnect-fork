# Generated by Django 2.2.13 on 2020-10-29 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('climateconnect_api', '0033_emailnotification'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='email_on_comment_on_your_project',
            field=models.BooleanField(blank=True, default=True, help_text="Check if user wants to receive emails when they receive a comment on a project they're a member of", null=True, verbose_name='Email on project comment'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='email_on_reply_to_your_comment',
            field=models.BooleanField(blank=True, default=True, help_text='Check if user wants to receive emails when somebody answers to their comment on a project', null=True, verbose_name='Email on comment reply'),
        ),
    ]