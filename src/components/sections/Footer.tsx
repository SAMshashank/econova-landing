import { FooterSection } from '@/types/contentful';
import { FaLinkedin, FaFacebook, FaTelegram, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

interface FooterProps {
  content: FooterSection;
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return <FaLinkedin />;
    case 'facebook':
      return <FaFacebook />;
    case 'telegram':
      return <FaTelegram />;
    case 'discord':
      return <FaDiscord />;
    case 'twitter':
      return <FaTwitter />;
    case 'instagram':
      return <FaInstagram />;
    default:
      return null;
  }
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-400">{content.copyrightText}</p>
          </div>
          <div className="flex space-x-4">
            {content.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label || `Visit our ${link.platform} page`}
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 