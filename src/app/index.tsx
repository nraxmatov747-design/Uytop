import { useState } from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
const districts = [
  'Chilonzor',
  'Yunusobod',
  'Mirzo Ulug‘bek',
  'Yakkasaroy',
  'Shayxontohur',
  'Mirobod',
  'Sergeli',
  'Olmazor',
];

export default function
 HomeScreen() {
  const [selectedDistrict, setSelectedDistrict] =
  useState<string | null>(null);

const [selectedRoom, setSelectedRoom] =
  useState<string | null>(null);

const [selectedPrice, setSelectedPrice] =
  useState<string | null>(null);

const [showHouses, setShowHouses] =
  useState(false);

const [selectedHouses, setSelectedHouses] =
  useState<number[]>([]);

const [favoriteHouses, setFavoriteHouses] =
  useState<number[]>([]);

const [selectedCategory, setSelectedCategory] =
  useState<string | null>(null);

const [showSearch, setShowSearch] =
  useState(false);
  const [showProfile, setShowProfile] =
  useState(false);
  const [showReport, setShowReport] =
  useState(false);

const [reportText, setReportText] =
  useState('');
  const [userName, setUserName] = useState('');
const [userPhone, setUserPhone] = useState('');
const [editingProfile, setEditingProfile] = useState(false);
const [searchText, setSearchText] =
  useState('');
   const prices = [
  '4–5 mln so‘m',
  '5–7 mln so‘m',
  '7–10 mln so‘m',
  '10–15 mln so‘m',
  '15 mln+ so‘m',
];
const houses = [
  {
    title: '2 xonali uy',
    category: 'Oila',
    district: 'Chilonzor',
    rooms: '2 xona',
    price: '5–7 mln so‘m',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    phone: '+998 90 123 45 67',
    address: 'Chilonzor 11-mavze',
    area: '58 m²',
    floor: '4-qavat / 9',
    repair: 'Yaxshi ta’mirlangan',
    furniture: 'Mebel bor',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Yorug‘ va shinam 2 xonali uy. Metro va asosiy yo‘lga yaqin.',
    owner: 'Makler',
  },

  {
    title: '3 xonali uy',
    category: 'Oila',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    district: 'Yunusobod',
    rooms: '3 xona',
    price: '7–10 mln so‘m',
    phone: '+998 90 234 56 78',
    address: 'Yunusobod 4-mavze',
    area: '75 m²',
    floor: '5-qavat / 9',
    repair: 'Yaxshi ta’mirlangan',
    furniture: 'Mebel bor',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Keng va qulay 3 xonali uy.',
    owner: 'Uy egasi',
  },

  {
    title: '1 xonali uy',
    category: 'Studentlar',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    district: 'Mirobod',
    rooms: '1 xona',
    price: '4–5 mln so‘m',
    phone: '+998 90 345 67 89',
    address: 'Mirobod tumani',
    area: '38 m²',
    floor: '3-qavat / 5',
    repair: 'Ta’mirlangan',
    furniture: 'Mebel bor',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Talaba yoki bir kishilik yashash uchun qulay.',
    owner: 'Makler',
  },

  {
    title: '4 xonali uy',
    category: 'Oila',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    district: 'Chilonzor',
    rooms: '4 xona',
    price: '10–15 mln so‘m',
    phone: '+998 90 456 78 90',
    address: 'Chilonzor 9-mavze',
    area: '105 m²',
    floor: '7-qavat / 12',
    repair: 'Yangi ta’mirlangan',
    furniture: 'To‘liq mebellangan',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Oilaviy yashash uchun katta va shinam 4 xonali uy.',
    owner: 'Uy egasi',
  },

  {
    title: '2 xonali uy',
    category: 'Studentlar',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    district: 'Mirobod',
    rooms: '2 xona',
    price: '5–7 mln so‘m',
    phone: '+998 90 567 89 01',
    address: 'Mirobod markazi',
    area: '55 m²',
    floor: '2-qavat / 5',
    repair: 'Yaxshi ta’mirlangan',
    furniture: 'Mebel bor',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Markaziy hududda joylashgan qulay 2 xonali uy.',
    owner: 'Makler',
  },

  {
    title: '5 xonali uy',
    category: 'Oila',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
    district: 'Yunusobod',
    rooms: '5+ xona',
    price: '15 mln+ so‘m',
    phone: '+998 90 678 90 12',
    address: 'Yunusobod 17-mavze',
    area: '140 m²',
    floor: '8-qavat / 12',
    repair: 'Premium ta’mir',
    furniture: 'To‘liq mebellangan',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Katta oila uchun mo‘ljallangan keng va zamonaviy uy.',
    owner: 'Uy egasi',
  },
  {
    title: '2 xonali sotiladigan uy',
    category: 'Sotib olish',
    district: 'Chilonzor',
    rooms: '2 xona',
    price: '850 mln so‘m',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    phone: '+998 90 123 45 67',
    address: 'Chilonzor tumani',
    area: '65 m²',
    floor: '3-qavat / 9',
    repair: 'Yaxshi ta’mirlangan',
    furniture: 'Mebel bor',
    utilities: 'Kommunal to‘lovlar alohida',
    description: 'Sotuvga qo‘yilgan 2 xonali uy.',
    owner: 'Makler',
  },
];
const filteredHouses = houses.filter((house) => {
  const matchesCategory =
    selectedCategory === null ||
    house.category === selectedCategory;

  const matchesSearch =
    searchText.trim() === '' ||
    house.title.toLowerCase().includes(searchText.trim().toLowerCase()) ||
    house.district.toLowerCase().includes(searchText.trim().toLowerCase()) ||
    house.rooms.toLowerCase().includes(searchText.trim().toLowerCase()) ||
    house.price.toLowerCase().includes(searchText.trim().toLowerCase());

  const matchesDistrict =
    selectedDistrict === null ||
    house.district === selectedDistrict;

  const matchesRoom =
    selectedRoom === null ||
    house.rooms === selectedRoom;

  const matchesPrice =
    selectedPrice === null ||
    house.price === selectedPrice;

  return (
    matchesCategory &&
    matchesSearch &&
    matchesDistrict &&
    matchesRoom &&
    matchesPrice
  );
});
return (
  <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {showReport && (
  <View style={styles.reportForm}>
    <Text style={styles.sectionTitle}>
      Shikoyat yozish
    </Text>

    <TextInput
      style={styles.reportInput}
      placeholder="Shikoyat sababini yozing..."
      placeholderTextColor="#9CA3AF"
      value={reportText}
      onChangeText={setReportText}
      multiline
    />

    <TouchableOpacity
      style={styles.reportButton}
      onPress={() => {
        if (reportText.trim() === '') {
          alert('Iltimos, shikoyat sababini yozing.');
          return;
        }

        alert('Shikoyatingiz qabul qilindi.');
        setReportText('');
        setShowReport(false);
      }}
    >
      <Text style={styles.reportButtonText}>
        Yuborish
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => setShowReport(false)}
    >
      <Text style={styles.districtText}>
        Bekor qilish
      </Text>
    </TouchableOpacity>
  </View>
)}
{showProfile ? (
  <View style={{ flex: 1 }}>
    <Text style={styles.title}>👤 Mening profilim</Text>
    <Text style={styles.subtitle}>
      Uy-Top mijoz akkaunti
    </Text>
<View style={styles.houseCard}>
      <Text style={styles.categoryEmoji}>👤</Text>
      <Text style={styles.houseTitle}>
        Xush kelibsiz!
      </Text>
      <Text style={styles.districtText}>
        Uy-Top foydalanuvchisi
      </Text>
      <Text style={styles.districtText}>
        ❤️ Sevimli uylaringiz: {favoriteHouses.length} ta
      </Text>
    </View> 
    <View style={styles.houseCard}>
      <Text style={styles.sectionTitle}>
        ❤️ Sevimli uylarim
      </Text>

      {favoriteHouses.length === 0 ? (
        <Text style={styles.districtText}>
          Hozircha sevimli uylar yo'q.
        </Text>
      ) : (
        favoriteHouses.map((houseIndex) => (
          <View key={houseIndex}>
            <Text style={styles.houseTitle}>
              {houses[houseIndex].title}
            </Text>
            <Text style={styles.districtText}>
              📍 {houses[houseIndex].district}
            </Text>
            <Text style={styles.districtText}>
              💰 {houses[houseIndex].price}
            </Text>
          </View>
        ))
      )}
    </View>
    <View style={styles.houseCard}>
      <Text style={styles.sectionTitle}>
        Shaxsiy ma’lumotlar
      </Text>
      {editingProfile ? (
  <>
    <TextInput
      style={styles.searchInput}
      placeholder="Ismingizni kiriting"
      value={userName}
      onChangeText={setUserName}
    />

    <TextInput
      style={styles.searchInput}
      placeholder="Telefon raqamingiz"
      keyboardType="phone-pad"
      value={userPhone}
      onChangeText={setUserPhone}
    />

    <TouchableOpacity
      style={styles.detailButton}
      onPress={() => setEditingProfile(false)}
    >
      <Text style={styles.detailButtonText}>
        Saqlash
      </Text>
    </TouchableOpacity>
  </>
) : (
  <>
    <Text style={styles.districtText}>
      Ism: {userName || 'Kiritilmagan'}
    </Text>
    <Text style={styles.districtText}>
      Telefon: {userPhone || 'Kiritilmagan'}
    </Text>

    <TouchableOpacity
      style={styles.detailButton}
      onPress={() => setEditingProfile(true)}
    >
      <Text style={styles.detailButtonText}>
        Ma'lumotlarni tahrirlash
      </Text>
    </TouchableOpacity>
  </>
)}
<View style={styles.houseCard}>
      <Text style={styles.sectionTitle}>
        📋 Buyurtmalar tarixi
      </Text>

      <Text style={styles.districtText}>
        Hozircha buyurtmalaringiz mavjud emas.
      </Text>

      <Text style={styles.descriptionText}>
        Uy band qilganingizdan so'ng, buyurtmalaringiz
        shu yerda ko'rinadi.
      </Text>
    </View>
    </View>

    <TouchableOpacity
      style={styles.detailButton}
      onPress={() => {
        setShowProfile(false);
        setShowSearch(false);
      }}
    >
      <Text style={styles.detailButtonText}>
        Asosiy sahifaga qaytish
      </Text>
    </TouchableOpacity>
  </View>
) : (
  <>

    <Text style={styles.title}>Uy-Top</Text>
      <Text style={styles.subtitle}>
        O‘zingizga mos uyni oson toping
      </Text>
{showSearch && (
  <TextInput
    style={styles.searchInput}
    placeholder="🔎 Uy qidiring..."
    placeholderTextColor="#9CA3AF"
    value={searchText}
    onChangeText={(text) => {
      setSearchText(text);

      if (text.trim() === '') {
        setSelectedDistrict(null);
        setSelectedRoom(null);
        setSelectedPrice(null);
      }
    }}
  />
)}

<Text style={styles.sectionTitle}>
  Kategoriyalar
</Text>

      <View style={styles.categoryRow}>

        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => {
  setSelectedCategory(
    selectedCategory === 'Oila' ? null : 'Oila'
  );
  setSearchText('');
  setSelectedDistrict(null);
  setSelectedRoom(null);
  setSelectedPrice(null);
}}
        >
          <Text style={styles.categoryEmoji}>👨‍👩‍👧</Text>
          <Text style={styles.categoryText}>Oila</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => {
  setSelectedCategory(
    selectedCategory === 'Studentlar' ? null : 'Studentlar'
  );
  setSearchText('');
  setSelectedDistrict(null);
  setSelectedRoom(null);
  setSelectedPrice(null);
}}
        >
          <Text style={styles.categoryEmoji}>🎓</Text>
          <Text style={styles.categoryText}>Studentlar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryCard}
         onPress={() => {
  setSelectedCategory(
    selectedCategory === 'Sotib olish' ? null : 'Sotib olish'
  );
  setSearchText('');
  setSelectedDistrict(null);
  setSelectedRoom(null);
  setSelectedPrice(null);
}}
        >
          <Text style={styles.categoryEmoji}>🏠</Text>
          <Text style={styles.categoryText}>Sotib olish</Text>
        </TouchableOpacity>

      </View>

{(!showSearch || searchText.trim() !== '') && (
  <Text style={styles.sectionTitle}>
    Yangi e’lonlar
  </Text>
)}
{(!showSearch || searchText.trim() !== '') &&
  filteredHouses.map((house, index) => {
    const isOpen = selectedHouses.includes(houses.indexOf(house));

    return (
            <View
              key={index}
              style={styles.houseCard}
            >

              <Image
                source={{ uri: house.image }}
                style={styles.houseImage}
              />

              <View style={styles.houseTitleRow}>
  <Text style={[styles.houseTitle, { flex: 1, marginBottom: 0 }]}>
    {house.title}
  </Text>

  <TouchableOpacity
    style={styles.favoriteButton}
    onPress={() => {
      const houseIndex = houses.indexOf(house);

      if (favoriteHouses.includes(houseIndex)) {
        setFavoriteHouses(
          favoriteHouses.filter((item) => item !== houseIndex)
        );
      } else {
        setFavoriteHouses([...favoriteHouses, houseIndex]);
      }
    }}
  >
    <Text style={styles.favoriteButtonText}>
      {favoriteHouses.includes(houses.indexOf(house)) ? '❤️' : '🤍'}
    </Text>
  </TouchableOpacity>
</View>

              <Text style={styles.districtText}>
                📍 {house.district}
              </Text>

              <Text style={styles.districtText}>
                🏠 {house.rooms}
              </Text>

              <Text style={styles.districtText}>
                💰 {house.price}
              </Text>

              {isOpen && (
                <>
                  <Text style={styles.districtText}>
                    📍 Manzil: {house.address}
                  </Text>

                  <Text style={styles.districtText}>
                    📐 Maydon: {house.area}
                  </Text>

                  <Text style={styles.districtText}>
                    🏢 Qavat: {house.floor}
                  </Text>

                  <Text style={styles.districtText}>
                    🔧 Ta’mir: {house.repair}
                  </Text>

                  <Text style={styles.districtText}>
                    🛋 Mebel: {house.furniture}
                  </Text>

                  <Text style={styles.districtText}>
                    💡 Kommunal: {house.utilities}
                  </Text>

                  <Text style={styles.descriptionText}>
                    📝 {house.description}
                  </Text>
                </>
              )}

              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => {
  const houseIndex = houses.indexOf(house);

  if (isOpen) {
    setSelectedHouses(
      selectedHouses.filter((item) => item !== houseIndex)
    );
  } else {
    setSelectedHouses([...selectedHouses, houseIndex]);
  }
}}
              >
                
                <Text style={styles.detailButtonText}>
                  {isOpen ? 'Yopish' : 'Batafsil'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
  style={styles.reportButton}
  onPress={() => {
    setReportText('');
    setShowReport(true);
  }}
>
  <Text style={styles.reportButtonText}>
    🚩 Shikoyat
  </Text>
</TouchableOpacity>

            </View>
          );
        })}

    </>
)}

</ScrollView>

<View style={styles.bottomNav}>
  <TouchableOpacity
    style={styles.bottomNavItem}
    onPress={() => {
      setShowSearch(false);
      setShowProfile(false);
      setShowReport(false);
    }}
  >
    <Text style={styles.bottomNavIcon}>🏠</Text>
    <Text style={styles.bottomNavText}>Asosiy</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.bottomNavItem}
    onPress={() => {
      setShowSearch(true);
      setShowProfile(false);
      setShowReport(false);
    }}
  >
    <Text style={styles.bottomNavIcon}>🔎</Text>
    <Text style={styles.bottomNavText}>Qidiruv</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.bottomNavItem}
    onPress={() => {
      setShowSearch(false);
      setShowProfile(true);
      setShowReport(false);
    }}
  >
    <Text style={styles.bottomNavIcon}>👤</Text>
    <Text style={styles.bottomNavText}>Profil</Text>
  </TouchableOpacity>
</View>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 20,
    paddingTop: 60,
  },
  reportForm: {
  backgroundColor: '#FFFFFF',
  padding: 16,
  margin: 12,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#E5E7EB',
},

reportInput: {
  minHeight: 100,
  borderWidth: 1,
  borderColor: '#D1D5DB',
  borderRadius: 8,
  padding: 12,
  textAlignVertical: 'top',
  marginBottom: 12,
},
  bottomNav: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 70,
  backgroundColor: '#FFFFFF',
  borderTopWidth: 1,
  borderTopColor: '#E5E7EB',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},

bottomNavItem: {
  alignItems: 'center',
  justifyContent: 'center',
},

bottomNavIcon: {
  fontSize: 22,
},

bottomNavText: {
  fontSize: 12,
  marginTop: 3,
},
  searchInput: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#E5E7EB',
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 14,
  fontSize: 16,
  color: '#111827',
  marginBottom: 20,
},
filterLabel: {
  fontSize: 15,
  fontWeight: '600',
  color: '#374151',
  marginBottom: 8,
},

filterScroll: {
  marginBottom: 18,
},

filterButton: {
  backgroundColor: '#FFFFFF',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 12,
  marginRight: 8,
  borderWidth: 1,
  borderColor: '#E5E7EB',
},

filterButtonActive: {
  backgroundColor: '#111827',
  borderColor: '#111827',
},

filterButtonText: {
  fontSize: 14,
  fontWeight: '500',
  color: '#374151',
},

filterButtonTextActive: {
  color: '#FFFFFF',
},
clearFilterButton: {
  backgroundColor: '#F3F4F6',
  paddingVertical: 12,
  borderRadius: 12,
  alignItems: 'center',
  marginBottom: 20,
},

clearFilterButtonText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#374151',
},

  title: {
  fontSize: 32,
  fontWeight: '700',
  color: '#111827',
  marginBottom: 10,
},
  subtitle: {
  fontSize: 16,
  color: '#6B7280',
  marginBottom: 25,
},

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 20,
  },
  categoryRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 24,
},

categoryCard: {
  backgroundColor: '#FFFFFF',
  width: '31%',
  height: 110,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#E5E7EB',
  elevation: 3,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 6,
},

categoryEmoji: {
  fontSize: 30,
  marginBottom: 8,
},

categoryText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#111827',
  textAlign: 'center',
},

  district: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  districtText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#111827',
  },
  descriptionText: {
  fontSize: 16,
  color: '#4B5563',
  marginTop: 12,
  lineHeight: 24,
},
  detailButton: {
  backgroundColor: '#111827',
  paddingVertical: 15,
  borderRadius: 14,
  marginTop: 8,
  marginBottom: 4,
},
detailButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},
  houseTitle: {
  fontSize: 20,
  fontWeight: '600',
  color: '#111827',
  marginBottom: 8,
},
houseTitleRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
},

favoriteButton: {
  padding: 8,
  marginLeft: 8,
},

favoriteButtonText: {
  fontSize: 24,
},
houseCard: {
  backgroundColor: '#FFFFFF',
  padding: 16,
  borderRadius: 20,
  marginBottom: 18,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  elevation: 2,
},
houseImage: {
  width: '100%',
  height: 200,
  borderRadius: 16,
  marginBottom: 14,
},

  backButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  reportButton: {
  alignSelf: 'flex-start',
  paddingVertical: 8,
  paddingHorizontal: 12,
  marginTop: 8,
  marginBottom: 8,
  borderRadius: 8,
  backgroundColor: '#FFF1F2',
},

reportButtonText: {
  color: '#BE123C',
  fontSize: 14,
  fontWeight: '600',
},
});