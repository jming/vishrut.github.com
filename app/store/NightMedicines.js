/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('Med-Table.store.NightMedicines', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Med-Table.model.Medicine',
        data: [/*{
            name: 'Benzathine Penicillin Injection',
            medicineImage: 'resources/tablets/benzathine-penicillin.jpg',
            afterBeforeFood: 'resources/images/med_after_eating-01.png',
            dose: 'resources/images/1-injection.jpg',
            warning1: 'resources/images/infant_with_cross-01.png',
            warning2: 'resources/images/pregnant_with_cross-01.png',
            audio: 'resources/Audio/Tablets/Benzathine Penicillin Injection.mp3'
        }
            ,
             {
             name:'Artemether',
             medicineImage:'resources/tablets/artemether.jpg',
             afterBeforeFood:'resources/images/med_after_eating-01.png',
             dose:'resources/images/half_med-01.png',
             warning1:'resources/images/infant_with_cross-01.png',
             warning2:'resources/images/pregnant_with_cross-01.png',
             audio:'resources/Audio/Tablets/Artemether.mp3'
             }  */
        ]
    }
});