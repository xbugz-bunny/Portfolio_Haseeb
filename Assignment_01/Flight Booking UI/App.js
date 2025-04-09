///https://www.figma.com/design/R8gDnqaPG7sC5FE8KSXPVo/Flight-Ticket-Booking-APP-UI-Concept-(Community)?node-id=3-187&t=lK8PpPnT0sk1HbjL-1

import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // For icons (install via npm or use in Snack)

export default function FlightBooking() {
  // State for form fields (you can expand this for real functionality)
  const [fromLocation, setFromLocation] = React.useState('Islamabad City (ISB)');
  const [toLocation, setToLocation] = React.useState('Dubai (DXB)');
  const [departDate, setDepartDate] = React.useState('11 JAN Mon');
  const [passengers, setPassengers] = React.useState('1 Adult, Economy');

  // Handle button press (simulated for now)
  const handleSearchFlight = () => {
    alert('Flight search initiated with:\nFrom: ' + fromLocation + '\nTo: ' + toLocation + '\nDepart: ' + departDate + '\nPassengers: ' + passengers);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Profile and Icons */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>Welcome</Text>
          <Text style={styles.profileName}>Bugs Bunny</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Ionicons name="settings-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Flight Booking Section */}
      <View style={styles.flightBookingSection}>
        <Text style={styles.heading}>Book your Flight Now</Text>
        <View style={styles.flightCard}>
          {/* From Location */}
          <View style={styles.locationRow}>
            <Text style={styles.label}>FROM</Text>
            <TextInput
              style={styles.input}
              value={fromLocation}
              onChangeText={setFromLocation}
              placeholder="Enter departure city"
              placeholderTextColor="#666666"
              editable={false} // Disable editing for this example; enable for real functionality
            />
          </View>
          {/* To Location with Airplane Icon */}
          <View style={styles.locationRow}>
            <Text style={styles.label}>TO</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                value={toLocation}
                onChangeText={setToLocation}
                placeholder="Enter destination city"
                placeholderTextColor="#666666"
                editable={false} // Disable editing for this example
              />
              <Ionicons name="airplane-outline" size={20} color="#ff1744" style={styles.icon} />
            </View>
          </View>
          {/* Depart Date and Passengers */}
          <View style={styles.locationRow}>
            <Text style={styles.label}>DEPART</Text>
            <TextInput
              style={styles.input}
              value={departDate}
              onChangeText={setDepartDate}
              placeholder="Select departure date"
              placeholderTextColor="#666666"
              editable={false} // Disable editing for this example
            />
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.label}>PASSENGERS</Text>
            <TextInput
              style={styles.input}
              value={passengers}
              onChangeText={setPassengers}
              placeholder="Select passengers"
              placeholderTextColor="#666666"
              editable={false} // Disable editing for this example
            />
          </View>
        </View>

        {/* Search Flight Button */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchFlight}>
          <Text style={styles.searchButtonText}>Search Flight</Text>
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e', // Dark blue background for the entire app
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1a237e', // Dark blue header
  },
  profile: {
    flexDirection: 'column',
  },
  profileText: {
    fontSize: 14,
    color: '#ffffff', // White text
    fontWeight: '500',
  },
  profileName: {
    fontSize: 16,
    color: '#ffffff', // White text
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 10,
  },
  flightBookingSection: {
    flex: 1,
    backgroundColor: '#ffffff', // White background for flight card
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e', // Dark blue text
    marginBottom: 20,
    textAlign: 'center',
  },
  flightCard: {
    backgroundColor: '#ffffff', // White background for card
    padding: 15,
    borderRadius: 15,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  locationRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666666', // Medium gray text
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light gray border
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333', // Dark gray text
    backgroundColor: '#fafafa', // Very light gray background
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light gray border
    borderRadius: 10,
    backgroundColor: '#fafafa', // Very light gray background
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
  searchButton: {
    backgroundColor: '#ff1744', // Bright red for Search Flight button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Rounded button
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 18,
    color: '#ffffff', // White text
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1a237e', // Dark blue footer
  },
  footerText: {
    fontSize: 14,
    color: '#ffffff', // White text
    fontWeight: '500',
  },
});