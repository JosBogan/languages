# pylint: disable=no-member

from django.test import TestCase, RequestFactory

# Create your tests here.

from .models import Subject
from .views import SubjectListView

class get_test(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
        self.subject = Subject.objects.create(
            name='French', data_name='french'
        )

    def test_code(self):
        request = self.factory.get('api/subjects/')

        response = SubjectListView.as_view()(request)
        self.assertEqual(response.status_code, 200)

    def test_type(self):
        request = self.factory.get('api/subjects/')

        # Use this syntax for class-based views.
        response = SubjectListView.as_view()(request)
        self.assertIsInstance(response.data, list)

    def test_data_type(self):
        request = self.factory.get('api/subjects/')

        # Use this syntax for class-based views.
        response = SubjectListView.as_view()(request)
        self.assertIsInstance(response.data[0]['name'], str)

    def test_data_content(self):
        request = self.factory.get('api/subjects/')

        # Use this syntax for class-based views.
        response = SubjectListView.as_view()(request)
        self.assertEqual(response.data[0]['name'], 'French')
        self.assertEqual(response.data[0]['data_name'], 'french')