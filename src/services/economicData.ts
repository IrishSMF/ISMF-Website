import axios from 'axios';

// FRED API configuration
const FRED_API_KEY = 'demo'; // In production, use a real FRED API key
const FRED_BASE_URL = 'https://api.stlouisfed.org/fred';

// Economic data interfaces
export interface EconomicIndicator {
  current: number;
  previous: number;
  change: number;
  trend: 'increasing' | 'decreasing' | 'stable';
}

export interface EconomicData {
  inflation: EconomicIndicator;
  unemployment: EconomicIndicator;
  historicalData: Array<{
    date: string;
    inflation: number;
    unemployment: number;
  }>;
}

// Mock data generator for demonstration
const generateRealisticData = (): EconomicData => {
  const historicalData = [];
  const months = 24;
  
  // Generate inflation data with realistic patterns
  for (let i = 0; i < months; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - (months - i - 1));
    
    // Simulate inflation trending down from 4.5% to 3.2%
    const baseInflation = 4.5 - (i * 0.05) + Math.sin(i * 0.4) * 0.3 + (Math.random() - 0.5) * 0.4;
    
    // Simulate unemployment trending down from 5.2% to 4.8%
    const baseUnemployment = 5.2 - (i * 0.02) + Math.sin(i * 0.3) * 0.2 + (Math.random() - 0.5) * 0.2;
    
    historicalData.push({
      date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      inflation: Math.round(baseInflation * 10) / 10,
      unemployment: Math.round(baseUnemployment * 10) / 10
    });
  }
  
  const currentInflation = historicalData[historicalData.length - 1].inflation;
  const previousInflation = historicalData[historicalData.length - 2].inflation;
  
  const currentUnemployment = historicalData[historicalData.length - 1].unemployment;
  const previousUnemployment = historicalData[historicalData.length - 2].unemployment;
  
  return {
    inflation: {
      current: currentInflation,
      previous: previousInflation,
      change: Math.round((currentInflation - previousInflation) * 10) / 10,
      trend: currentInflation > previousInflation ? 'increasing' : 'decreasing'
    },
    unemployment: {
      current: currentUnemployment,
      previous: previousUnemployment,
      change: Math.round((currentUnemployment - previousUnemployment) * 10) / 10,
      trend: currentUnemployment > previousUnemployment ? 'increasing' : 'decreasing'
    },
    historicalData
  };
};

// Real FRED API implementation (commented out for demo)
/*
const fetchFredData = async (seriesId: string, limit: number = 24): Promise<number[]> => {
  try {
    const response = await axios.get(`${FRED_BASE_URL}/series/observations`, {
      params: {
        series_id: seriesId,
        api_key: FRED_API_KEY,
        file_type: 'json',
        limit: limit,
        sort_order: 'desc'
      }
    });
    
    return response.data.observations
      .map((obs: any) => parseFloat(obs.value))
      .filter((val: number) => !isNaN(val))
      .reverse();
  } catch (error) {
    console.error(`Error fetching ${seriesId}:`, error);
    throw error;
  }
};

const fetchRealEconomicData = async (): Promise<EconomicData> => {
  try {
    // Fetch inflation data (CPIAUCSL - Consumer Price Index)
    const inflationData = await fetchFredData('CPIAUCSL');
    
    // Fetch unemployment data (UNRATE - Unemployment Rate)
    const unemploymentData = await fetchFredData('UNRATE');
    
    // Process the data
    const historicalData = inflationData.map((inflation, index) => ({
      date: new Date(Date.now() - (inflationData.length - index - 1) * 30 * 24 * 60 * 60 * 1000)
        .toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      inflation: Math.round((inflation / inflationData[0] - 1) * 100 * 10) / 10, // Convert to YoY %
      unemployment: unemploymentData[index] || 0
    }));
    
    const currentInflation = historicalData[historicalData.length - 1].inflation;
    const previousInflation = historicalData[historicalData.length - 2].inflation;
    
    const currentUnemployment = historicalData[historicalData.length - 1].unemployment;
    const previousUnemployment = historicalData[historicalData.length - 2].unemployment;
    
    return {
      inflation: {
        current: currentInflation,
        previous: previousInflation,
        change: Math.round((currentInflation - previousInflation) * 10) / 10,
        trend: currentInflation > previousInflation ? 'increasing' : 'decreasing'
      },
      unemployment: {
        current: currentUnemployment,
        previous: previousUnemployment,
        change: Math.round((currentUnemployment - previousUnemployment) * 10) / 10,
        trend: currentUnemployment > previousUnemployment ? 'increasing' : 'decreasing'
      },
      historicalData
    };
  } catch (error) {
    console.error('Error fetching FRED data:', error);
    throw error;
  }
};
*/

// Main export function
export const fetchEconomicData = async (): Promise<EconomicData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // For demo purposes, return mock data
  // In production, replace with: return await fetchRealEconomicData();
  return generateRealisticData();
};

// Alternative data sources for production
export const dataSources = {
  fred: {
    name: 'Federal Reserve Economic Data (FRED)',
    url: 'https://fred.stlouisfed.org',
    description: 'Comprehensive economic data from the Federal Reserve Bank of St. Louis'
  },
  oecd: {
    name: 'OECD Data',
    url: 'https://data.oecd.org',
    description: 'Economic indicators from the Organisation for Economic Co-operation and Development'
  },
  worldBank: {
    name: 'World Bank Open Data',
    url: 'https://data.worldbank.org',
    description: 'Global development indicators from the World Bank'
  }
};
