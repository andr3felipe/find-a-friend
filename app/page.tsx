"use client";

import Image from "next/image";
import logo from "../public/logo.svg";
import homeImage from "../public/home-image.svg";
import { Bottom, Content, Logo, Main, Middle, SelectUF } from "./styles";
import UFSelect from "@/components/Filters/UFSelect";
import CitySelect from "@/components/Filters/CitySelect";
import { Button } from "@/components/Filters/Button/Button";

export default function Home() {
  return (
    <Main>
      <Logo>
        <Image
          width={54}
          height={56}
          alt="Logotipo de um cachorro"
          src={logo}
        />
        <h2>FindAFriend</h2>
      </Logo>

      <Content>
        <Middle>
          <h1>Leve a felicidade para o seu lar</h1>
          <Image
            width={592}
            height={305}
            alt="Imagem com 6 cachorros felizes"
            src={homeImage}
          />
        </Middle>

        <Bottom>
          <h3>Encontre o animal de estimação ideal para seu estilo de vida!</h3>

          <div>
            <SelectUF>
              <label htmlFor="UF">Busque um amigo:</label>
              <UFSelect />
              <CitySelect />
            </SelectUF>
            <Button />
          </div>
        </Bottom>
      </Content>
    </Main>
  );
}
