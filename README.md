# Fest Gun Discord Botu

## Komutlar
| Komut | Açıklama |
|---|---|
| `/sunucu durum` | Aktif / Restart / Kapalı duyurusu + IP |
| `/ban` `/unban` `/ban-sorgu` `/kick` | Moderasyon |
| `/rolver` `/rolal` | Rol yönetimi |
| `/oluşum-ekle` | Rol + kategori + yazı/ses kanalı açar |
| `/istatistik-bilgi` | Sunucu istatistikleri |
| `/destek-islem top / ekle / istatistik` | Destek işlem takibi |
| `/mesai gir / çık / tablo / sıralama` | Mesai sistemi |
| `/dmduyuru` | Sunucudaki herkese DM (açılan formda mesajı yazarsın) |

Haftalık mesai tablosu her Pazartesi 00:00'da (TR saati) `MESAI_KANAL_ID` kanalına otomatik atılır.

## Discord Developer Portal ayarları
1. Bot sekmesi → **Reset Token** ile yeni token al (eskisi ifşa oldu).
2. Bot sekmesi → **Server Members Intent** seçeneğini AÇ (zorunlu).
3. OAuth2 → URL Generator → `bot` + `applications.commands` seç, yetki olarak **Administrator** ver, botu sunucuya ekle.

## Railway kurulumu
1. Bu klasörü GitHub'a yükle (`.env` yüklenmesin, `.gitignore` bunu engeller).
2. Railway → New Project → Deploy from GitHub.
3. **Variables** kısmına ekle:
   - `DISCORD_TOKEN` = yeni token
   - `GUILD_ID` = sunucu ID (komutlar anında görünür)
   - `SERVER_IP` = oyun sunucusu IP
   - `MESAI_KANAL_ID` = 1554566189391552554
   - `LOGO_URL` = (opsiyonel) logo linki
   - `DATA_DIR` = `/data` (aşağıdaki Volume için)
4. **Volume ekle** (mount path: `/data`). Yoksa Railway her deploy'da mesai/destek verilerini sıfırlar.
5. Bot sırasını üst role taşı, yoksa rol/ban komutları çalışmaz.
