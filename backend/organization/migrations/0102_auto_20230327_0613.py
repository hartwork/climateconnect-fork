# Generated by Django 3.2.16 on 2023-03-27 06:13

from django.db import migrations, models
import django.db.models.deletion
import organization.models.status


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0101_merge_20221115_0740'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectTypes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, help_text='Name of the project type', max_length=512, null=True, verbose_name='Name')),
                ('name_de_translation', models.CharField(blank=True, help_text='Translation of name column', max_length=512, null=True, verbose_name='Name DE translation')),
                ('help_text', models.TextField(blank=True, help_text='Small helper text that is shown under the name in the shrae project interface', max_length=512, null=True, verbose_name='Helptext')),
                ('help_text_de', models.TextField(blank=True, help_text='Translation of help_text column', max_length=512, null=True, verbose_name='Helptext DE translation')),
                ('icon', models.FileField(blank=True, help_text='The icon representing the project type in the share project interface', null=True, upload_to=organization.models.status.project_type_image_path, verbose_name='Icon')),
                ('type_id', models.IntegerField(choices=[(0, 'project'), (1, 'idea'), (2, 'event')], default=0, help_text='Type of the status. Used as unique identifier', verbose_name='Status Type')),
                ('created_at', models.DateTimeField(auto_now_add=True, help_text='Time when project was linked to an organization', verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, help_text='Time when project was updated. i.e.: Order change etc.', verbose_name='Updated At')),
            ],
            options={
                'verbose_name': 'Project Type',
                'verbose_name_plural': 'Project Types',
                'ordering': ['id'],
            },
        ),
        migrations.AddField(
            model_name='project',
            name='project_type',
            field=models.ForeignKey(default=organization.models.status.ProjectTypes.get_default_pk, help_text="Points to project's type", on_delete=django.db.models.deletion.PROTECT, related_name='project_type', to='organization.projecttypes', verbose_name='Project Type'),
        ),
    ]
