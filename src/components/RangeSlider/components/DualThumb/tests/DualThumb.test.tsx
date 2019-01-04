import * as React from 'react';
import {noop} from '@shopify/javascript-utilities/other';
import {mountWithAppProvider, findByTestID, trigger} from 'test-utilities';
import DualThumb from '../DualThumb';
import TextField from '../../../../TextField';

describe('<DualThumb />', () => {
  const mockProps = {
    id: 'RangeSlider',
    cssVarPrefix: '--Polaris-RangeSlider-',
    value: [5, 20] as [number, number],
    min: 0,
    max: 50,
    step: 1,
    output: false,
    disabled: false,
    onChange: noop,
  };

  describe('id', () => {
    it('is used to set the id on the wrapper div', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} id="RangeSlider" />,
      );

      expect(
        dualThumb
          .find('div')
          .first()
          .prop('id'),
      ).toBe('RangeSlider');
    });

    it('is used to set idLower on the lower thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} id="RangeSlider" />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('id')).toBe('RangeSliderLower');
    });

    it('is used to set idUpper on the upper thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} id="RangeSlider" />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('id')).toBe('RangeSliderUpper');
    });
  });

  describe('min', () => {
    it('is used to set the aria-valuemin on the lower thumb', () => {
      const min = 0;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} min={min} />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-valuemin')).toBe(min);
    });

    it('is used to set the aria-valuemin on the upper thumb', () => {
      const min = 0;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} min={min} />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-valuemin')).toBe(min);
    });

    it('sets a lower boundary for aria-valuenow on the lower thumb', () => {
      const min = 5;
      const value = [0, 20] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} min={min} value={value} />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-valuenow')).toBe(min);
    });
  });

  describe('max', () => {
    it('is used to set the aria-valuemax on the lower thumb', () => {
      const max = 0;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} max={max} />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-valuemin')).toBe(max);
    });

    it('is used to set the aria-valuemax on the upper thumb', () => {
      const max = 0;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} max={max} />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-valuemax')).toBe(max);
    });

    it('sets an upper boundary for aria-valuenow on the upper thumb', () => {
      const max = 5;
      const value = [0, 6] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} max={max} value={value} />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-valuenow')).toBe(max);
    });
  });

  describe('accessibilityInputs', () => {
    it('renders two TextFields when true', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs />,
      );

      expect(dualThumb.find(TextField)).toHaveLength(2);
    });

    it('renders the lower TextField as a number', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs />,
      );

      const textFieldLower = dualThumb.find(TextField).first();
      expect(textFieldLower.prop('type')).toBe('number');
    });

    it('renders the upper TextField as a number', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs />,
      );

      const textFieldUpper = dualThumb.find(TextField).last();
      expect(textFieldUpper.prop('type')).toBe('number');
    });

    it('renders the lower TextField with a visually hidden label', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs />,
      );

      const textFieldLower = dualThumb.find(TextField).first();
      expect(textFieldLower.prop('label')).toBe('Lower value');
      expect(textFieldLower.prop('labelHidden')).toBe(true);
    });

    it('renders the upper TextField with a visually hidden label', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs />,
      );

      const textFieldUpper = dualThumb.find(TextField).last();
      expect(textFieldUpper.prop('label')).toBe('Upper value');
      expect(textFieldUpper.prop('labelHidden')).toBe(true);
    });

    it('renders the lower TextField with the lower value as a string', () => {
      const value = [5, 10] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs value={value} />,
      );

      const textFieldLower = dualThumb.find(TextField).first();
      expect(textFieldLower.prop('value')).toBe('5');
    });

    it('renders the upper TextField with the upper value as a string', () => {
      const value = [5, 10] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs value={value} />,
      );

      const textFieldUpper = dualThumb.find(TextField).last();
      expect(textFieldUpper.prop('value')).toBe('10');
    });

    describe('prefix', () => {
      it('passes the prefix to the lower TextField', () => {
        const prefix = '$';
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} accessibilityInputs prefix={prefix} />,
        );

        const textFieldLower = dualThumb.find(TextField).first();
        expect(textFieldLower.prop('prefix')).toBe(prefix);
      });

      it('passes the prefix to the upper TextField', () => {
        const prefix = '$';
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} accessibilityInputs prefix={prefix} />,
        );

        const textFieldUpper = dualThumb.find(TextField).last();
        expect(textFieldUpper.prop('prefix')).toBe(prefix);
      });
    });

    describe('suffix', () => {
      it('passes the suffix to the lower TextField', () => {
        const suffix = '£';
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} accessibilityInputs suffix={suffix} />,
        );

        const textFieldLower = dualThumb.find(TextField).first();
        expect(textFieldLower.prop('suffix')).toBe(suffix);
      });

      it('passes the suffix to the upper TextField', () => {
        const suffix = '£';
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} accessibilityInputs suffix={suffix} />,
        );

        const textFieldUpper = dualThumb.find(TextField).last();
        expect(textFieldUpper.prop('suffix')).toBe(suffix);
      });
    });

    describe('onChange()', () => {
      it('returns value and id when called by the lower TextField', () => {
        const onChangeSpy = jest.fn();
        const value = [10, 20] as [number, number];

        const dualThumb = mountWithAppProvider(
          <DualThumb
            {...mockProps}
            accessibilityInputs
            onChange={onChangeSpy}
            value={value}
          />,
        );

        const id = 'RangeSlider';
        const textFieldLower = dualThumb.find(TextField).first();
        trigger(textFieldLower, 'onChange', {value, id}, () => {
          expect(onChangeSpy).toHaveBeenCalledWith({value, id});
        });
      });

      it('returns value and id when called by the upper TextField', () => {
        const onChangeSpy = jest.fn();
        const value = [10, 20] as [number, number];

        const dualThumb = mountWithAppProvider(
          <DualThumb
            {...mockProps}
            accessibilityInputs
            onChange={onChangeSpy}
            value={value}
          />,
        );

        const id = 'RangeSlider';
        const textFieldUpper = dualThumb.find(TextField).last();
        trigger(textFieldUpper, 'onChange', {value, id}, () => {
          expect(onChangeSpy).toHaveBeenCalledWith({value, id});
        });
      });
    });
  });

  describe('step', () => {
    it('adjusts the lower value', () => {
      const step = 5;
      const value = [3, 10] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} step={step} value={value} />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-valuenow')).toBe(step);
    });

    it('adjusts the upper value', () => {
      const step = 5;
      const value = [0, 9] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} step={step} value={value} />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-valuenow')).toBe(10);
    });

    it('passes step to the lower TextField', () => {
      const step = 5;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs step={step} />,
      );

      const textFieldLower = dualThumb.find(TextField).first();
      expect(textFieldLower.prop('step')).toBe(step);
    });

    it('passes step to the upper TextField', () => {
      const step = 5;
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs step={step} />,
      );

      const textFieldUpper = dualThumb.find(TextField).last();
      expect(textFieldUpper.prop('step')).toBe(step);
    });
  });

  describe('disabled', () => {
    it('sets aria-disabled to false by default on the lower thumb', () => {
      const dualThumb = mountWithAppProvider(<DualThumb {...mockProps} />);

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-disabled')).toBe(false);
    });

    it('sets aria-disabled to false by default on the upper thumb', () => {
      const dualThumb = mountWithAppProvider(<DualThumb {...mockProps} />);

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-disabled')).toBe(false);
    });

    it('sets aria-disabled to true on the lower thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} disabled />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-disabled')).toBe(true);
    });

    it('sets aria-disabled to true on the upper thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} disabled />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-disabled')).toBe(true);
    });

    it('gets passed to the lower TextField', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs disabled />,
      );

      const textFieldLower = dualThumb.find(TextField).first();
      expect(textFieldLower.prop('disabled')).toBe(true);
    });

    it('gets passed to the upper TextField', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} accessibilityInputs disabled />,
      );

      const textFieldUpper = dualThumb.find(TextField).last();
      expect(textFieldUpper.prop('disabled')).toBe(true);
    });
  });

  describe('error', () => {
    it('sets aria-invalid to true on the lower thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} error="Error" />,
      );

      const thumbLower = findByTestID(dualThumb, 'thumbLower');
      expect(thumbLower.prop('aria-invalid')).toBe(true);
    });

    it('sets aria-invalid to true on the upper thumb', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} error="Error" />,
      );

      const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
      expect(thumbUpper.prop('aria-invalid')).toBe(true);
    });

    describe('aria-describedby', () => {
      it('gets set correctly on the lower thumb', () => {
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} error="Error" />,
        );

        const thumbLower = findByTestID(dualThumb, 'thumbLower');
        expect(thumbLower.prop('aria-describedby')).toBe('RangeSliderError');
      });

      it('gets set correctly on the upper thumb', () => {
        const dualThumb = mountWithAppProvider(
          <DualThumb {...mockProps} error="Error" />,
        );

        const thumbUpper = findByTestID(dualThumb, 'thumbUpper');
        expect(thumbUpper.prop('aria-describedby')).toBe('RangeSliderError');
      });
    });
  });

  describe('output', () => {
    it('does not render the lower output by default', () => {
      const dualThumb = mountWithAppProvider(<DualThumb {...mockProps} />);

      const outputLower = dualThumb.find('output').first();
      expect(outputLower).toHaveLength(0);
    });

    it('does not render the upper output by default', () => {
      const dualThumb = mountWithAppProvider(<DualThumb {...mockProps} />);

      const outputUpper = dualThumb.find('output').last();
      expect(outputUpper).toHaveLength(0);
    });

    it('renders the lower output', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} output />,
      );

      const outputLower = dualThumb.find('output').first();
      expect(outputLower).toHaveLength(1);
    });

    it('renders the upper output', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} output />,
      );

      const outputUpper = dualThumb.find('output').last();
      expect(outputUpper).toHaveLength(1);
    });

    it('renders the correct value for the lower output', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} output />,
      );

      const outputLower = dualThumb.find('output').first();
      expect(outputLower.find('span').text()).toContain('5');
    });

    it('renders the correct value for the upper output', () => {
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} output />,
      );

      const outputUpper = dualThumb.find('output').last();
      expect(outputUpper.find('span').text()).toContain('20');
    });
  });

  describe('onFocus()', () => {
    it('gets called when the lower thumb gets focus', () => {
      const onFocusSpy = jest.fn();
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} onFocus={onFocusSpy} />,
      );

      const lowerThumb = findByTestID(dualThumb, 'thumbLower');
      lowerThumb.simulate('focus');
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });

    it('gets called when the upper thumb gets focus', () => {
      const onFocusSpy = jest.fn();
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} onFocus={onFocusSpy} />,
      );

      const upperThumb = findByTestID(dualThumb, 'thumbUpper');
      upperThumb.simulate('focus');
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onBlur()', () => {
    it('gets called when the lower thumb loses focus', () => {
      const onBlurSpy = jest.fn();
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} onBlur={onBlurSpy} />,
      );

      const lowerThumb = findByTestID(dualThumb, 'thumbLower');
      lowerThumb.simulate('blur');
      expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });

    it('gets called when the upper thumb loses focus', () => {
      const onBlurSpy = jest.fn();
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} onBlur={onBlurSpy} />,
      );

      const upperThumb = findByTestID(dualThumb, 'thumbUpper');
      upperThumb.simulate('blur');
      expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('CSS custom properties', () => {
    it('sets the correct css custom properties on the track', () => {
      const min = 10;
      const max = 50;
      const value = [20, 50] as [number, number];
      const dualThumb = mountWithAppProvider(
        <DualThumb {...mockProps} value={value} min={min} max={max} />,
      );

      const expected = {
        '--Polaris-RangeSlider-progress-lower': '0px',
        '--Polaris-RangeSlider-progress-upper': '-18px',
      };
      const track = findByTestID(dualThumb, 'track');
      const actual = track.find('[style]').prop('style');

      expect(expected).toEqual(actual);
    });
  });
});
