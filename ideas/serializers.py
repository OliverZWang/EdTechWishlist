from rest_framework import serializers
from django.conf import settings
from .models import Idea
from profiles.serializers import ProfileSerializer

MAX_LENGTH = settings.MAX_LENGTH

class IdeaSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField()
    user = ProfileSerializer(read_only=True, source='user.profile')
    class Meta:
        model = Idea
        fields = ['user', 'id', 'title' , 'content', 'timestamp']

    def validate_content(self, value):
        if len(value) > MAX_LENGTH:
            raise serializers.ValidationError("The content is too long!")
        return value
    
    # def get_user(self, obj):
    #     return obj.user.id