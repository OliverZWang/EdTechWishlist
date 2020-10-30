from rest_framework import serializers
from django.conf import settings
from .models import Idea

MAX_LENGTH = settings.MAX_LENGTH

class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['content']

    def validate_content(self, value):
        if len(value) > MAX_LENGTH:
            raise serializers.ValidationError("The content is too long!")
        return value