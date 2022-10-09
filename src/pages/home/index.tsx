import coffeeImage from '../../assets/coffee_img.svg'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import {
  HeroContainer,
  HomeContainer,
  ContentContainer,
  FeaturesContainer,
  FeatureContainer,
  FeatureImgContainer,
} from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <HeroContainer>
        <ContentContainer>
          <h1>Find the perfect coffee everytime, everyday.</h1>
          <p>We send your coffee wherever you are, anytime you need.</p>
          <FeaturesContainer>
            <FeatureContainer>
              <FeatureImgContainer
                style={{
                  background: '#C47F17',
                }}
              >
                <ShoppingCart size={24} weight="fill" color="#fff" />
              </FeatureImgContainer>
              <span>Simple and safe purchase process</span>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureImgContainer
                style={{
                  background: '#29292E',
                }}
              >
                <Package size={24} weight="fill" color="#fff" />
              </FeatureImgContainer>
              <span>Quality package, keeps the coffee safe</span>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureImgContainer
                style={{
                  background: '#DBAC2C',
                }}
              >
                <Timer size={24} weight="fill" color="#fff" />
              </FeatureImgContainer>
              <span>Fast and tracked deliver</span>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureImgContainer
                style={{
                  background: '#8047F8',
                }}
              >
                <Coffee size={24} weight="fill" color="#fff" />
              </FeatureImgContainer>
              <span>You receives a fresh coffee</span>
            </FeatureContainer>
          </FeaturesContainer>
        </ContentContainer>
        <img src={coffeeImage} alt="Coffee Image" />
      </HeroContainer>
    </HomeContainer>
  )
}
