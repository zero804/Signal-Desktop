/* eslint-disable max-len */

import * as React from 'react';
import * as styles from './ShareButtons.scss';
import { useI18n } from '../util/i18n';

export type Props = {
  value: string;
};

export const ShareButtons: React.ComponentType<Props> = React.memo(
  ({ value }) => {
    const i18n = useI18n();

    const buttonPaths = React.useMemo<
      Array<[string, string, string, string]>
    >(() => {
      const packUrl = encodeURIComponent(value);
      const text = encodeURIComponent(
        `${i18n('StickerCreator--ShareStage--socialMessage')} ${value}`
      );

      return [
        // Facebook
        [
          i18n('StickerCreator--ShareButtons--facebook'),
          '#4267B2',
          'M20.155 10.656l-1.506.001c-1.181 0-1.41.561-1.41 1.384v1.816h2.817l-.367 2.845h-2.45V24h-2.937v-7.298h-2.456v-2.845h2.456V11.76c0-2.435 1.487-3.76 3.658-3.76 1.04 0 1.934.077 2.195.112v2.544z',
          `https://www.facebook.com/sharer/sharer.php?u=${packUrl}`,
        ],
        // Twitter
        [
          i18n('StickerCreator--ShareButtons--twitter'),
          '#1CA1F2',
          'M22.362 12.737c.006.141.01.282.01.425 0 4.337-3.302 9.339-9.34 9.339A9.294 9.294 0 018 21.027c.257.03.518.045.783.045a6.584 6.584 0 004.077-1.405 3.285 3.285 0 01-3.067-2.279 3.312 3.312 0 001.483-.057 3.283 3.283 0 01-2.633-3.218v-.042c.442.246.949.394 1.487.411a3.282 3.282 0 01-1.016-4.383 9.32 9.32 0 006.766 3.43 3.283 3.283 0 015.593-2.994 6.568 6.568 0 002.085-.796 3.299 3.299 0 01-1.443 1.816A6.587 6.587 0 0024 11.038a6.682 6.682 0 01-1.638 1.699',
          `https://twitter.com/intent/tweet?text=${text}`,
        ],
        // Pinterest
        // [
        //   i18n('StickerCreator--ShareButtons--pinterest'),
        //   '#BD081C',
        //   'M17.234 19.563c-.992 0-1.926-.536-2.245-1.146 0 0-.534 2.118-.646 2.527-.398 1.444-1.569 2.889-1.66 3.007-.063.083-.203.057-.218-.052-.025-.184-.324-2.007.028-3.493l1.182-5.008s-.293-.587-.293-1.454c0-1.362.789-2.379 1.772-2.379.836 0 1.239.628 1.239 1.38 0 .84-.535 2.097-.811 3.261-.231.975.489 1.77 1.451 1.77 1.74 0 2.913-2.236 2.913-4.886 0-2.014-1.356-3.522-3.824-3.522-2.787 0-4.525 2.079-4.525 4.402 0 .8.237 1.365.607 1.802.17.201.194.282.132.512-.045.17-.145.576-.188.738-.061.233-.249.316-.46.23-1.283-.524-1.882-1.931-1.882-3.511C9.806 11.13 12.008 8 16.374 8c3.51 0 5.819 2.538 5.819 5.265 0 3.605-2.005 6.298-4.959 6.298',
        //   `https://pinterest.com/pin/create/button/?url=${packUrl}`,
        // ],
        // Whatsapp
        [
          i18n('StickerCreator--ShareButtons--whatsapp'),
          '#25D366',
          'M16.033 23.862h-.003a7.914 7.914 0 01-3.79-.965L8.035 24l1.126-4.109a7.907 7.907 0 01-1.059-3.964C8.104 11.556 11.661 8 16.033 8c2.121 0 4.113.826 5.61 2.325a7.878 7.878 0 012.321 5.609c-.002 4.371-3.56 7.928-7.931 7.928zm3.88-5.101c-.165.463-.957.885-1.338.942a2.727 2.727 0 01-1.248-.078 11.546 11.546 0 01-1.13-.418c-1.987-.858-3.286-2.859-3.385-2.991-.1-.132-.81-1.074-.81-2.049 0-.975.513-1.455.695-1.653a.728.728 0 01.528-.248c.132 0 .264.001.38.007.122.006.285-.046.446.34.165.397.56 1.372.61 1.471.05.099.083.215.017.347-.066.132-.1.215-.198.331-.1.115-.208.258-.297.347-.1.098-.203.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.396.884 1.594.984.198.099.314.082.429-.05.116-.132.496-.578.628-.777.132-.198.264-.165.446-.099.18.066 1.156.545 1.354.645.198.099.33.148.38.231.049.083.049.479-.116.942zm-3.877-9.422c-3.636 0-6.594 2.956-6.595 6.589 0 1.245.348 2.458 1.008 3.507l.157.249-.666 2.432 2.495-.654.24.142a6.573 6.573 0 003.355.919h.003a6.6 6.6 0 006.592-6.59 6.55 6.55 0 00-1.93-4.662 6.549 6.549 0 00-4.66-1.932z',
          `https://wa.me?text=${text}`,
        ],
      ];
    }, [i18n, value]);

    return (
      <div className={styles.container}>
        {buttonPaths.map(([title, fill, path, url]) => (
          <button
            type="button"
            key={path}
            className={styles.button}
            onClick={() => window.open(url)}
            title={title}
          >
            <svg width={32} height={32}>
              <circle cx="16" cy="16" r="16" fill={fill} />
              <path d={path} fill="#FFF" fillRule="evenodd" />
            </svg>
          </button>
        ))}
      </div>
    );
  }
);
