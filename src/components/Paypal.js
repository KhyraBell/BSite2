import React from 'react';

const PayPal = () => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick" />
  <input type="hidden" name="business" value="brandonlsichling@gmail.com" />
  <input type="hidden" name="lc" value="US" />
  <input type="hidden" name="item_name" value="Chloe Chamonix" />
  <input type="hidden" name="button_subtype" value="services" />
  <input type="hidden" name="no_note" value="0" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
  

  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  </form>
  );
}

export default PayPal;