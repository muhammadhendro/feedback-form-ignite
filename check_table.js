const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gczkguxxyodxicmixgyl.supabase.co';
const supabaseKey = 'sb_secret_wZ2vy5rz8AyxijG2SOS_ng_ir0QPpRc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTable() {
    console.log('Checking if pdp_advance_training_feedback exists...');
    const { data, error } = await supabase
        .from('pdp_advance_training_feedback')
        .select('*')
        .limit(1);
    
    if (error) {
        console.error('Error accessing table:', error.message);
        console.error('Code:', error.code);
    } else {
        console.log('Table exists! Data:', data);
    }
}

checkTable();
