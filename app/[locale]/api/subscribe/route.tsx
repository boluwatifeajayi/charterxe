import axios from 'axios';

export const POST = async (request:any) => {
  try {
    const { email } = await request.json();

    
    const listId = '8e736064df'; 
    const apiKey = '0fcbb0fac896deda48af3b4431de90ea-us8'; 

    const apiUrl = `https://us8.api.mailchimp.com/3.0/lists/8e736064df/members`;
   

    const response = await axios.post(
      apiUrl,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (response.status === 200) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const responseData = {
        success: false,
        error: 'Failed to subscribe',
      };

      if (response.data && response.data.title) {
        responseData.error = response.data.title;
      }

      return new Response(JSON.stringify(responseData), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};