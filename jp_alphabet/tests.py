# pylint: disable=no-member

from django.test import RequestFactory, TestCase

from .models import Character
from .views import CharacterListView

# Create your tests here.

class get_test(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
        self.character = Character.objects.create(
            character='あ', translation='a', row='1')

    def test_code(self):
        request = self.factory.get('api/lang/jp/alpha/')

        # Use this syntax for class-based views.
        response = CharacterListView.as_view()(request)
        self.assertEqual(response.status_code, 200)

    def test_type(self):
        request = self.factory.get('api/lang/jp/alpha/')

        # Use this syntax for class-based views.
        response = CharacterListView.as_view()(request)
        self.assertIsInstance(response.data, list)
    
    # def test_type(self):
    #     request = self.factory.get('/lang/jp/alpha/')

    #     # Use this syntax for class-based views.
    #     response = CharacterListView.as_view()(request)
    #     self.assertIsInstance(response.data, list)
