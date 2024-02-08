import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { View, FlatList, SectionList, Text } from 'react-native'

import { CATEGORIES, MENU } from '@/utils/data/products'
import { useState, useRef } from 'react'
import { Product } from '@/components/product'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelected(category: string) {
    setCategory(category)

    const sectionIndex = CATEGORIES.findIndex((item) => item === category)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
      })
    }
  }

  return (
    <View>
      <Header title="Faça seu pedido" cartQuantity={3} />

      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryButton
              title={item}
              isSelected={category === item}
              onPress={() => handleCategorySelected(item)}
            />
          )}
          horizontal
          className="mt-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        />
      </View>

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Product data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </View>
  )
}
