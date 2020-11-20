from django.test import TestCase
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient
import json

from .models import Idea
# Create your tests here.

User = get_user_model()

class TweetTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='abc', password='somepassword')
        self.another_user = User.objects.create_user(username='def', password='notsomepassword')
        Idea.objects.create(content="my 1st idea", user=self.user)
        Idea.objects.create(content="my 2nd idea", user=self.user)
        Idea.objects.create(content="my 3rd idea", user=self.another_user)
        self.currentCount = Idea.objects.all().count()


    def test_idea_created(self):
        idea = Idea.objects.create(content="my test idea", user=self.user)
        self.assertEqual(idea.id, 4)
        self.assertEqual(idea.user, self.user)
    
    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='somepassword')
        return client

    def test_idea_list(self):
        client = self.get_client()
        response = client.get('/ideas/list/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 3) 
        # print(response.json())
    
    def test_ideas_related_name(self):
        user = self.user
        self.assertEqual(user.ideas.count(), 2)
    
    def test_idea_create_api_view(self):
        request_data = {"content": "This is my test idea"}
        client = self.get_client()
        response = client.post("/ideas/create/", request_data)
        self.assertEqual(response.status_code, 201)
        response_data = response.json()
        new_idea_id = response_data.get("id")
        self.assertEqual(self.currentCount+1, new_idea_id)

    def test_idea_detail_api_view(self):
        client = self.get_client()
        response = client.get("/ideas/1/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        _id = data.get('id')
        self.assertEqual(_id, 1)

    def test_idea_delete_api_view(self):
        client = self.get_client()
        response = client.delete("/ideas/1/delete/")
        self.assertEqual(response.status_code, 200)

        client = self.get_client()
        response = client.delete("/ideas/1/delete/")
        self.assertEqual(response.status_code, 404)

        response_incorrect_owner = client.delete("/ideas/3/delete/")
        self.assertEqual(response_incorrect_owner.status_code, 401)

