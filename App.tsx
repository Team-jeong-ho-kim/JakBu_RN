import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { View, Text } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text>Jakbu</Text>
      </View>
    </QueryClientProvider>
  );
}
