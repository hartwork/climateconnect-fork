# Generated by Django 2.2.20 on 2021-07-27 04:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('climate_match', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='answer_type',
            field=models.ForeignKey(blank=True, help_text="Points to a model who's weight should increase. Example: Hubs, Predefined Answer, Skills", null=True, on_delete=django.db.models.deletion.SET_NULL, to='contenttypes.ContentType', verbose_name='Answer type'),
        ),
        migrations.CreateModel(
            name='AnswerMetaData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.IntegerField(help_text='What should be the weight of a resource. Resources may contain projects, ideas, organization etc.This will help us sort projects, ideas, organization etc easily.', verbose_name='Weight')),
                ('reference_id', models.IntegerField(blank=True, help_text='Points to ID of a reference. Example: Hub ID that user chooses.', null=True, verbose_name='Reference ID')),
                ('resource_type', models.ForeignKey(help_text='Points to table that we will be ranking. i.e.: Points to Hubs, Idea, Organization, Project and Skills', on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType', verbose_name='Resource type')),
            ],
            options={
                'verbose_name': 'Answer metadata',
                'verbose_name_plural': 'Answer metadata',
            },
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(help_text='Answer text', max_length=1024, verbose_name='Answer')),
                ('created_at', models.DateTimeField(auto_now_add=True, help_text='Time when pre-defined answers were created', verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Time when answer was updated', verbose_name='Updated at')),
                ('answer_metadata', models.ManyToManyField(help_text='Points to answer metadata table', to='climate_match.AnswerMetaData', verbose_name='Answer metadata')),
                ('question', models.ForeignKey(help_text='Points to question with predefined answers', on_delete=django.db.models.deletion.CASCADE, related_name='answer_question', to='climate_match.Question', verbose_name='Question')),
            ],
            options={
                'verbose_name': 'Answer',
                'verbose_name_plural': 'Answers',
            },
        ),
    ]