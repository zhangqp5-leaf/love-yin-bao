import axios from 'axios';

export default {
    // One组件所需数据
    async getOneSentance() {
        const response = await axios.get('https://api.vvhan.com/api/love?type=json');
        if (response.status === 200) {
            return response.data.ishan;
        }
        return '宝宝我爱你！(ps：每日一句URI坏了)';
    },
};

