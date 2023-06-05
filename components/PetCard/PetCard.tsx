import Image, { StaticImageData } from "next/image";
import * as S from "./styles";
import logo from "../../public/logo.svg";

export interface PetCardProps {
  name: string;
  image: StaticImageData;
  gender: string;
}

export function PetCard({ name, image, gender }: PetCardProps) {
  return (
    <S.Container>
      <S.PetImage>
        <Image alt="" src={image} />
      </S.PetImage>

      <S.PetIconContainer>
        {" "}
        <S.PetIcon
          style={{
            backgroundColor: `${
              gender === "male" ? "var(--yellow)" : "var(--primary)"
            }`,
          }}
        >
          <Image alt="" width={15} height={15} src={logo} />
        </S.PetIcon>
      </S.PetIconContainer>

      <S.PetName>{name}</S.PetName>
    </S.Container>
  );
}
