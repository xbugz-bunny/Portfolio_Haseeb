//  https://www.figma.com/design/qGN0ZcdgqDzrCUuoFMRikB/Social-Media-App-(Community)?node-id=0-1&t=SirtshOOYJKDcRKL-1

import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // For icons (install via npm or use in Snack)

export default function SocialProfile() {
  // Sample data for the profile
  const profile = {
    username: '@BugsBunny',
    followers: '4k',
    following: '258',
    profileImage: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Bugs_Bunny.svg', // Bugs Bunny image (circular)
  };

  // Random placeholder image URLs for the grid (replace with actual URLs if needed)
  const posts = [
    'https://picsum.photos/200/200?random=1', // Random image 1
    'https://picsum.photos/200/200?random=2', // Random image 2
    'https://picsum.photos/200/200?random=3', // Random image 3
    'https://picsum.photos/200/200?random=4', // Random image 4
  ];

  // Handle button presses (simulated for now)
  const handleFollow = () => {
    alert('Follow action triggered!');
  };

  const handleMessage = () => {
    alert('Message action triggered!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: profile.profileImage }} // Bugs Bunny image
            style={styles.profileImage}
            onError={(e) => console.log('Profile image load error:', e.nativeEvent.error)}
          />
          <View style={styles.profileStats}>
            <Text style={styles.statsText}>{profile.followers} Followers</Text>
            <Text style={styles.statsText}>{profile.following} Following</Text>
          </View>
        </View>
        <Text style={styles.username}>{profile.username}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.followButton]} onPress={handleFollow}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.messageButton]} onPress={handleMessage}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Grid Section */}
      <View style={styles.postsSection}>
        <View style={styles.tabBar}>
          <Text style={styles.tabText}>All</Text>
          <Text style={styles.tabText}>Photos</Text>
          <Text style={styles.tabText}>Video</Text>
        </View>
        <View style={styles.grid}>
          {posts.map((post, index) => (
            <Image
              key={index}
              source={{ uri: post }} // Random placeholder images
              style={styles.postImage}
              onError={(e) => console.log('Post image load error:', e.nativeEvent.error)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // White background for the entire app
  },
  header: {
    backgroundColor: '#40c4ff', // Teal-blue background for header
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b3e5fc', // Lighter teal-blue border
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular (eclipse) shape for Bugs Bunny
    backgroundColor: '#e0e0e0', // Light gray fallback if image fails
    marginRight: 15,
  },
  profileStats: {
    alignItems: 'center',
  },
  statsText: {
    fontSize: 16,
    color: '#ffffff', // White text for contrast
    fontWeight: 'bold',
  },
  username: {
    fontSize: 20,
    color: '#ffffff', // White text for contrast
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  followButton: {
    backgroundColor: '#ffca28', // Vibrant yellow for Follow button
  },
  messageButton: {
    backgroundColor: '#4caf50', // Vibrant green for Message button
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff', // White text for buttons
    fontWeight: 'bold',
  },
  postsSection: {
    backgroundColor: '#e0f7fa', // Light teal-blue background for posts
    padding: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b3e5fc', // Lighter teal-blue border
  },
  tabText: {
    fontSize: 16,
    color: '#2196f3', // Bright blue for tabs
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postImage: {
    width: '48%', // Two images per row, leaving space for margins
    height: 150, // Adjusted height for mobile
    marginBottom: 5,
    borderRadius: 8, // Slight rounding for modern look
    borderWidth: 1,
    borderColor: '#b3e5fc', // Lighter teal-blue border
  },
});