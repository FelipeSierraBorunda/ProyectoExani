import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcesurrwzhltxuvvczdu.supabase.co'
const supabaseKey = 'sb_publishable_tIphfGoEWQ-h6kq7p6OfhQ_vxPBpb7-'

export const supabase = createClient(supabaseUrl, supabaseKey)