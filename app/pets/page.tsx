"use client";

import { Logo } from "@/components/icons/Logo";
import * as S from "./styles";
import CitySelect from "@/components/Filters/CitySelect";
import UFSelect from "@/components/Filters/UFSelect";
import { Button } from "@/components/Button/Button";
import AgeSelect from "@/components/Filters/AgeSelect";
import EnergySelect from "@/components/Filters/EnergySelect";
import SizeSelect from "@/components/Filters/SizeSelect";
import IndependencySelect from "@/components/Filters/IdependencySelect";
import TypeSelect from "@/components/Filters/TypeSelect";
import { PetCard } from "@/components/PetCard/PetCard";
import { PetsData } from "@/images/PetsData";

export default function Pets() {
  return (
    <S.Container>
      <S.FilterContainer>
        <S.FilterHead>
          <S.FilterLogo>
            <Logo />
          </S.FilterLogo>

          <S.FilterUFCityContainer>
            <UFSelect />
            <CitySelect />
            <Button />
          </S.FilterUFCityContainer>
        </S.FilterHead>

        <S.FilterBody>
          <S.FilterBodyTitle>Filtros</S.FilterBodyTitle>
          <AgeSelect />
          <EnergySelect />
          <SizeSelect />
          <IndependencySelect />
        </S.FilterBody>
      </S.FilterContainer>

      <S.PetsContainer>
        <S.PetsHead>
          <S.PetsTitle>
            Encontre <strong>x amigos</strong> na sua cidade
          </S.PetsTitle>
          <S.PetsFilterByType style={{ display: "none" }}>
            <TypeSelect />
          </S.PetsFilterByType>
        </S.PetsHead>

        <S.PetsBody>
          {PetsData.map((item) => {
            return (
              <PetCard
                key={item.name}
                name={item.name}
                gender={item.gender}
                image={item.image}
              />
            );
          })}
        </S.PetsBody>
      </S.PetsContainer>
    </S.Container>
  );
}
