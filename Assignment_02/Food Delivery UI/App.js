//https://www.figma.com/design/zE9mBcO5FSiE642joztGxx/Bugs-Food-Delivery?node-id=0-1&t=H4XbPv59rvmk3da2-1

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

export default function FoodDeliveryTracker() {
  // Sample data for food categories with provided image URLs
  const foodCategories = [
    {
      id: 1,
      name: 'Burger',
      image: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg',
      rating: '97%',
    },
    {
      id: 2,
      name: 'Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdf8ctbARHWXlRXKffmqBriFgjBmxtQtMoi4llsghy1SDfU4ltOtsikKja2LQszODsWs&usqp=CAU',
      rating: '95%',
    },
  ];

  // Handle button presses (simulated for now)
  const handleDelivery = () => {
    alert('Delivery order started!');
  };

  const handleCarryOut = () => {
    alert('Carry out order started!');
  };

  const handleNavigate = (section) => {
    alert(`Navigate to ${section} section!`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigate('Menu')}>
          <Ionicons name="menu-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bugs Food Delivery</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Order Type Section */}
      <View style={styles.orderSection}>
        <Text style={styles.orderTitle}>TRACKER</Text>
        <Text style={styles.orderSubtitle}>START YOUR ORDER</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.orderButton, styles.deliveryButton]} onPress={handleDelivery}>
            <Text style={styles.buttonText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.orderButton, styles.carryOutButton]} onPress={handleCarryOut}>
            <Text style={styles.buttonText}>Carry Out</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.categoryPrompt}>FOOD CATEGORIES</Text>
        <Text style={styles.categoryQuestion}>What do you need?</Text>
      </View>

      {/* Food Categories Section */}
      <View style={styles.categoriesSection}>
        {foodCategories.map((category) => (
          <View key={category.id} style={styles.categoryCard}>
            <Image
              source={{ uri: category.image }} // Provided image URLs
              style={styles.categoryImage}
              onError={(e) => console.log('Category image load error:', e.nativeEvent.error)}
            />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryRating}>{category.rating}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => handleNavigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#ab47bc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Search')}>
          <Ionicons name="search-outline" size={24} color="#ab47bc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Orders')}>
          <Ionicons name="list-outline" size={24} color="#ab47bc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate('Account')}>
          <Ionicons name="person-outline" size={24} color="#ab47bc" />
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ab47bc', // Purple background for header
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 18,
    color: '#ffffff', // White text
    fontWeight: 'bold',
  },
  headerSpacer: {
    width: 24, // Matching the space for the profile icon in the screenshot
  },
  orderSection: {
    padding: 20,
    backgroundColor: '#ffffff', // White background for order section
    alignItems: 'center',
  },
  orderTitle: {
    fontSize: 14,
    color: '#ab47bc', // Purple text
    fontWeight: '500',
    marginBottom: 5,
  },
  orderSubtitle: {
    fontSize: 16,
    color: '#666666', // Medium gray text
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  orderButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  deliveryButton: {
    backgroundColor: '#ab47bc', // Purple for Delivery button
  },
  carryOutButton: {
    backgroundColor: '#ab47bc', // Lighter purple for Carry Out button
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff', // White text
    fontWeight: 'bold',
  },
  categoryPrompt: {
    fontSize: 14,
    color: '#ab47bc', // Purple text
    fontWeight: '500',
    marginBottom: 5,
  },
  categoryQuestion: {
    fontSize: 16,
    color: '#666666', // Medium gray text
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoriesSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff', // White background for categories
  },
  categoryCard: {
    backgroundColor: '#f5f5f5', // Very light gray for category cards
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10, // Slight rounding for image
    backgroundColor: '#e0e0e0', // Light gray fallback if image fails
  },
  categoryInfo: {
    alignItems: 'flex-end',
  },
  categoryName: {
    fontSize: 18,
    color: '#ab47bc', // Purple text
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryRating: {
    fontSize: 14,
    color: '#666666', // Medium gray text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ab47bc', // Purple background for footer
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});