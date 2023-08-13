import React from 'react';

function Contact() {
  return (
    <section>
      <div class='main container-fluid'>
        <div class='row text-dark py-5'>
          <div class='col-md-8 offset-md-2'>
            <h2 class='fs-1 mb-5 text-center fw-bold'>お問い合わせ</h2>
            <form>
              <div class='mb-3'>
                <input type='text' class='form-control' name='お名前' placeholder='お名前' value='' />
              </div>
              <div class='mb-3'>
                <input type='text' class='form-control' name='Email' placeholder='メールアドレス' value='' />
              </div>
              <div class='mb-3'>
                <input type='text' class='form-control' name='電話番号' placeholder='電話番号' value='' />
              </div>
              <div class='mb-4'>
                <textarea class='form-control' name='お問い合わせ内容' rows='5' placeholder='問い合わせ内容を入力してください'></textarea>
              </div>
              <div class='text-center pt-4 col-md-6 offset-md-3'>
                <button class='btn btn-primary'>送信</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
