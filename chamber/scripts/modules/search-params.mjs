const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#thank-you').innerHTML = `
    <p>Application for ${myInfo.get('first-name')} ${myInfo.get('last-name')}</p>
    <p>Organizational Title: ${myInfo.get('organizational-title')}</p>
    <p>Your email: ${myInfo.get('email')}</p>
    <p>Your phone: ${myInfo.get('phone')}</p>
    <p>Business/Organization: ${myInfo.get('organization')}</p>
    <p>Membership: ${myInfo.get('membership')}</p>
    <p>Organization description: ${myInfo.get('description')}</p>
    <p>Time submitted: ${myInfo.get('timestamp')}
`;


