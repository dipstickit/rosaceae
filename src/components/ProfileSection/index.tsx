import React from "react";
import { Button, Img, Text } from "..";

interface ProfileSectionProps {
  icon: string;
  title: string;
  subtitle?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ icon, title, subtitle }) => (
  <div className="flex flex-1 flex-col items-start">
    <div className="flex items-center gap-1.5">
      <Button color="gray_300_05" size="6xl" shape="round" className="!rounded-[5px] w-[58px]">
        <Img src={icon} />
      </Button>
      <div>
        <Text size="11xl" as="p" className="mb-[5px] self-end !font-manrope17 !text-black-900">
          {title}
        </Text>
        {subtitle && (
          <Text size="md" as="p" className="!font-manrope17 !text-gray-600_02">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
    <div className="ml-[58px] h-px self-stretch bg-gray-300_04 md:ml-0" />
  </div>
);

export default ProfileSection;

