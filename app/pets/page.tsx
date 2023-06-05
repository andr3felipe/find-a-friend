"use client";

import { Logo } from "@/components/icons/Logo";
import * as S from "./styles";
import CitySelect from "@/components/Filters/CitySelect";
import UFSelect from "@/components/Filters/UFSelect";
import { Button } from "@/components/Filters/Button/Button";
import AgeSelect from "@/components/Filters/AgeSelect";
import EnergySelect from "@/components/Filters/EnergySelect";
import SizeSelect from "@/components/Filters/SizeSelect";
import IndependencySelect from "@/components/Filters/IdependencySelect";
import TypeSelect from "@/components/Filters/TypeSelect";

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
            Encontre <strong>324 amigos</strong> na sua cidade
          </S.PetsTitle>
          <S.PetsFilterByType>
            <TypeSelect />
          </S.PetsFilterByType>
        </S.PetsHead>

        <S.PetsBody>
          <div>
            <s>animal 3</s>
          </div>
          <s>Animal 1</s>
          <div>
            <s>animal 3</s>
          </div>
          <div>
            <s>animal 3</s>
          </div>
          <div>
            <s>animal 3</s>
          </div>
        </S.PetsBody>
      </S.PetsContainer>
    </S.Container>
  );
}
