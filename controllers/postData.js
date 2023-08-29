const axios = require('axios')

const postData = async (req, res) => {
  try {
    const { campaignId, landingId, dateFrom, dateTo } = req.body
    const apiUrl = 'https://eluniversal24.website/admin_api/v1/clicks/log'

    const requestData = {
      range: {
        from: dateFrom,
        to: dateTo,
        timezone: 'Europe/Moscow',
        interval: null,
      },
      limit: 0,
      offset: 0,
      columns: [
        'sub_id',
        'landing_clicked',
        'datetime',
        'ip',
        'campaign_id',
        'stream_id',
        'landing',
        'offer',
        'ts',
        'affiliate_network',
        'country_flag',
        'region',
        'city',
        'os_icon',
        'browser_icon',
        'connection_type',
        'device_type',
        'device_model',
        'is_bot',
        'is_unique_campaign',
        'sub_id_16',
        'sub_id_18',
        'sub_id_17',
        'sub_id_19',
        'sub_id_20',
        'sub_id_21',
        'sub_id_22',
        'sub_id_23',
        'sub_id_24',
        'sub_id_25',
        'sub_id_26',
        'sub_id_27',
        'sub_id_28',
        'sub_id_29',
        'sub_id_30',
        'is_lead',
        'is_sale',
        'is_rejected',
      ],
      filters: [],
    }
    if (campaignId) {
      requestData.filters.push({
        name: 'campaign_id',
        operator: 'EQUALS',
        expression: campaignId,
      })
    }

    if (landingId) {
      requestData.filters.push({
        name: 'landing_id',
        operator: 'EQUALS',
        expression: landingId,
      })
    }

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Api-Key': 'b9b6df8fcac3be672f5b926390f54c79',
      },
    })

    console.log(response.data)
    res.json({ data: response.data })
  } catch (error) {
    console.error('ошибка кампании на сервере', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
}
module.exports = postData
