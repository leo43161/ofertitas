import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// --- Nuestros Datos Mock ---
const CATEGORIES = [
    { id: '1', title: 'Comida', icon: 'utensils' },
    { id: '2', title: 'Ropa', icon: 'tshirt' },
    { id: '3', title: 'Tecnología', icon: 'laptop' },
    { id: '4', title: 'Hogar', icon: 'home' },
    { id: '5', title: 'Servicios', icon: 'tools' },
    { id: '6', title: 'Otros', icon: 'question' },
];

const PROMOTIONS = [
    { id: 'a', title: '50% OFF en toda la tienda', business: 'Tienda de Ropa X' },
    { id: 'b', title: '2x1 en Hamburguesas', business: 'Comida Rápida Y' },
    { id: 'c', title: 'Consulta técnica gratis', business: 'Servicios Z' },
    { id: 'd', title: 'Panadería: 3x2 en facturas', business: 'Pan del Valle' },
];

const CategoryIcon = ({ icon }: { icon: string }) => (
    <View style={styles.categoryIconContainer}>
        <FontAwesome5 name={icon as any} size={30} color="#ff6464ff" />
    </View>
);
const { width } = Dimensions.get('window');
const CATEGORY_ITEM_WIDTH = (width - 20 * 2 - 10 * 2) / 3; // (width - padding*2 - margin*2) / 3

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* 1. SearchBar */}
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchBar} placeholder="Buscar en Ofertitas..." />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* 2. Banner Publicitario */}
                <View style={styles.bannerContainer}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '118%', height: '108%', position: 'relative', top: -8, left: -7 }} source={require('../../assets/images/hamburguesa.png')} />
                    </View>
                    <View style={{ flex: 3, justifyContent: 'flex-start', paddingTop: 13, paddingLeft: 15 }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color: 'white' }}>Hamburguesas 50% OFF</Text>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', textDecorationLine: 'underline' }}>Ver ofertita</Text>
                    </View>
                </View>

                {/* 3. Grilla de Categorías (3x2) */}
                <View style={styles.categoryGrid}>
                    {CATEGORIES.map((category) => (
                        <TouchableOpacity key={category.id} style={styles.categoryItem}>
                            <CategoryIcon icon={category.icon} />
                            <Text style={styles.categoryText}>{category.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 4. Lista de Promociones */}
                <Text style={styles.sectionTitle}>Ofertitas Cerca</Text>
                <View style={styles.promotionsList}>
                    {PROMOTIONS.map((promo) => (
                        <TouchableOpacity key={promo.id} style={styles.promoItem}>
                            <View style={styles.promoImage} />
                            <View style={styles.promoTextContainer}>
                                <Text style={styles.promoTitle}>{promo.title}</Text>
                                <Text style={styles.promoBusiness}>{promo.business}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

// --- Nuestros Estilos (StyleSheet) ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2', // Un fondo gris claro
    },
    searchContainer: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
        fontSize: 16,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    bannerContainer: {
        height: 120,
        backgroundColor: '#7C2104',
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
    },
    bannerText: {
        color: '#999',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 10,
    },
    // Estilos para la Grilla (3x2)
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: 15,
    },
    categoryItem: {
        width: CATEGORY_ITEM_WIDTH,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    categoryIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 12,
        textAlign: 'center',
    },
    // Estilos para la Lista de Promociones
    promotionsList: {
        paddingHorizontal: 15,
    },
    promoItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 15,
        flexDirection: 'row',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    promoImage: {
        width: 100,
        height: 100,
        backgroundColor: '#eee',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    promoTextContainer: {
        flex: 1,
        padding: 12,
    },
    promoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    promoBusiness: {
        fontSize: 14,
        color: '#555',
    },
});

export default HomeScreen;