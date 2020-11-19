from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    # id = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Profile
        fields = [
            "first_name", 
            "last_name",
            "username", 
            "id",
            "bio"
        ]
    
    def get_first_name(self, obj):

        return obj.user.first_name
    
    def get_last_name(self, obj): 
        return obj.user.last_name

    def get_username(self, obj):
        return obj.user.username