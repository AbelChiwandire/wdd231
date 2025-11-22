export const membershipTiers = [
  {
    id: 'np',
    name: 'NP Membership',
    price: 'Free',
    tagline: 'Supporting Organizations Making a Difference',
    description: 'Designed for non-profit organizations committed to community development and social impact in Johannesburg.',
    features: [
      'Access to networking events',
      'Chamber directory listing',
      'Monthly newsletter',
      'Community resource access',
      'Volunteer opportunities',
      'Social impact workshops'
    ]
  },
  {
    id: 'bronze',
    name: 'Bronze Membership',
    type: 'Starter',
    price: 'R2,500',
    period: '/year',
    tagline: 'Launch Your Business Growth',
    description: 'Perfect for startups and small businesses looking to establish their presence in Johannesburg\'s business community.',
    features: [
      'All NP Membership benefits',
      'Quarterly business workshops',
      'Member-to-member discounts',
      'Event priority registration',
      'Business profile on website',
      'Advocacy & representation'
    ]
  },
  {
    id: 'silver',
    name: 'Silver Membership',
    price: 'R5,000',
    period: '/year',
    tagline: 'Accelerate Your Market Presence',
    description: 'For growing businesses ready to expand their network and influence in the Johannesburg business ecosystem.',
    features: [
      'All Bronze Membership benefits',
      'Featured directory listing',
      'Monthly exclusive events',
      'Committee participation',
      'Marketing opportunities',
      'Business mentorship program',
      'Referral network access'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Membership',
    price: 'R10,000',
    period: '/year',
    tagline: 'Lead the Business Community',
    description: 'Our premium tier for established enterprises seeking maximum visibility and strategic partnerships.',
    features: [
      'All Silver Membership benefits',
      'Board nomination eligibility',
      'VIP event access',
      'Speaking opportunities',
      'Annual spotlight feature',
      'Dedicated account manager',
      'Strategic partnership matching',
      'Premium office hour access'
    ]
  }
];

export function displayMembershipTiers ()
{
    const tiersSection = document.getElementById('membership-cards');

    membershipTiers.forEach(tier => {
        const section = document.createElement('section');
        section.classList.add('tier-section', 'fade-up', 'card');
        section.id = tier.id;

        const h2 = document.createElement('h2');
        h2.textContent = tier.name;
        h2.classList.add('mt-md');

        const price = document.createElement('p');
        price.textContent = tier.price;
        price.classList.add('price');

        if (tier.period) {
            const period = document.createElement('span');
            period.textContent = tier.period;
            period.classList.add('min-text');
            price.appendChild(period);
        }
        
        const tagline = document.createElement('p');
        tagline.textContent = tier.tagline;
        tagline.classList.add('flex-grow');

        const features = document.createElement('ul');
        features.classList.add('features-list');

        for(let i = 0; i < 3 && i < tier.features.length; i++){
            const li = document.createElement('li');
            li.classList.add('ml-md');
            li.textContent = tier.features[i];
            features.appendChild(li);
        };

        const featuresLeft = document.createElement('p');
        featuresLeft.textContent = `+${tier.features.length - 3} more benefits`;

        const navLink = document.createElement('button');
        navLink.innerHTML = `
            Learn More
            <svg class="feather feather-arrow-right" fill="none" height="24"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" 
            y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        `;
        navLink.setAttribute(`aria-label`, `More information about the ${tier.name}`);
        navLink.classList.add('tier-btn', 'flex', 'justify-between', 'mt-md');
        
        section.append(h2, price, tagline, features, featuresLeft, navLink);
        tiersSection.appendChild(section);
    });
}