from rest_framework import serializers
from django.conf import settings
from .models import Idea


MAX_LENGTH = settings.MAX_LENGTH
IDEA_ACTION_OPTIONS = settings.IDEA_ACTION_OPTIONS

class IdeaActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    def validate_action(self, value):
        value = value.lower().strip()
        if not value in IDEA_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action for an idea")
        else:
            return value

class IdeaSerializer(serializers.ModelSerializer):
    wanted = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Idea
        fields = ['id','content','wanted']

    def get_wanted(self, obj):
        return obj.wanted.count()


    def validate_content(self, value): 
        if len(value) > MAX_LENGTH:
            raise serializers.ValidationError("The content is too long!")
        return value